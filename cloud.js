(()=>{
  const URL='https://hzfjmsmgnczaancqfjvu.supabase.co';
  const KEY='sb_publishable__DhYae4ayORxbChKOLDIFw_vIvie2Xi';
  const client=window.supabase?.createClient(URL,KEY,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});
  async function loadProducts(){
    if(!client)return null;
    const {data,error}=await client.from('store_state').select('products,updated_at').eq('id','products').maybeSingle();
    if(error)throw error;
    return data;
  }
  async function saveProducts(products){
    if(!client)throw new Error('ยังเชื่อมฐานข้อมูลไม่ได้');
    const {data:{user}}=await client.auth.getUser();
    if(!user)throw new Error('กรุณาล็อกอินแอดมิน');
    const {data,error}=await client.from('store_state').update({products,updated_at:new Date().toISOString(),updated_by:user.id}).eq('id','products').select('id').single();
    if(error||!data)throw error||new Error('บัญชีนี้ไม่มีสิทธิ์บันทึกข้อมูลออนไลน์');
  }
  async function uploadDataUrl(dataUrl,id){
    if(!client||!dataUrl?.startsWith('data:'))return dataUrl;
    const sourceBlob=await fetch(dataUrl).then(r=>r.blob());
    if(!sourceBlob.size)throw new Error('ไฟล์รูปว่างเปล่าหรืออ่านไม่ได้');
    // Safari/PWA บางรุ่นคืน PNG แม้ canvas ขอ WebP ทำให้ Storage ปฏิเสธ MIME
    // กำหนดชนิดของ payload ที่อัปโหลดให้ตรงกับ bucket โดยคงข้อมูลรูปที่ browser สร้างไว้
    const blob=sourceBlob.type==='image/webp'?sourceBlob:new Blob([await sourceBlob.arrayBuffer()],{type:'image/webp'}),path=`${id}-${Date.now()}.webp`;
    const {error}=await client.storage.from('product-images').upload(path,blob,{contentType:'image/webp',upsert:false,cacheControl:'31536000'});
    if(error){if(String(error.message).toLowerCase().includes('mime type'))throw new Error('เครื่องยังใช้ไฟล์รูปเวอร์ชันเก่า กรุณาปิดแอปแล้วเปิดใหม่');throw error}
    return client.storage.from('product-images').getPublicUrl(path).data.publicUrl;
  }
  function subscribe(onProducts){
    if(!client)return null;
    return client.channel('bmf-products-live').on('postgres_changes',{event:'UPDATE',schema:'public',table:'store_state',filter:'id=eq.products'},payload=>{
      if(Array.isArray(payload.new?.products))onProducts(payload.new.products,payload.new.updated_at);
    }).subscribe();
  }
  async function signIn(email){
    email=String(email).trim().toLowerCase();
    const {error}=await client.auth.signInWithOtp({email,options:{emailRedirectTo:`${location.origin}/adminbmf30/`,shouldCreateUser:true}});
    if(error)throw error;
  }
  async function signInPassword(email,password){
    email=String(email).trim().toLowerCase();
    const {data,error}=await client.auth.signInWithPassword({email,password});
    if(error)throw error;
    return data.session;
  }
  async function updatePassword(password){
    if(String(password).length<6)throw new Error('รหัสผ่านต้องมีอย่างน้อย 6 ตัว');
    const {data,error}=await client.auth.updateUser({password:String(password)});
    if(error)throw error;
    return data.user;
  }
  async function session(){return client?(await client.auth.getSession()).data.session:null}
  async function signOut(){if(client)await client.auth.signOut()}
  window.BMFCloud={client,loadProducts,saveProducts,uploadDataUrl,subscribe,signIn,signInPassword,updatePassword,session,signOut};
})();
