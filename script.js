*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{
background:#0f172a;
color:white;
}

.container{
display:flex;
min-height:100vh;
}

.sidebar{
width:260px;
background:#111827;
padding:25px;
border-right:1px solid #1f2937;
}

.sidebar h2{
margin-bottom:25px;
}

.menu-item{
padding:12px;
border-radius:10px;
margin-bottom:10px;
cursor:pointer;
}

.menu-item:hover{
background:#1e293b;
}

.active{
background:#2563eb;
}

.content{
flex:1;
padding:30px;
}

.content h1{
margin-bottom:20px;
}

.team-grid{
display:grid;
grid-template-columns:repeat(auto-fill,minmax(180px,1fr));
gap:15px;
margin-bottom:25px;
}

.team-card{
background:#1e293b;
padding:16px;
border-radius:12px;
cursor:pointer;
transition:.2s;
border:2px solid transparent;
}

.team-card:hover{
border-color:#3b82f6;
}

.team-card.selected{
border-color:#3b82f6;
background:#1d4ed8;
}

.primary-btn{
background:#2563eb;
color:white;
border:none;
padding:14px 24px;
border-radius:10px;
cursor:pointer;
margin-bottom:25px;
}

.matches{
display:flex;
flex-direction:column;
gap:16px;
}

.match-card{
background:#1e293b;
padding:20px;
border-radius:12px;
}

.match-info{
margin-top:8px;
color:#cbd5e1;
}

.stage{
margin-top:12px;
display:inline-block;
background:#334155;
padding:6px 12px;
border-radius:20px;
font-size:13px;
}

.notification-box{
margin-top:30px;
background:#1e293b;
padding:20px;
border-radius:12px;
}

.notification-box h3{
margin-bottom:15px;
}

.notification-box label{
display:block;
margin-bottom:10px;
}

.sticky-btn{
position:fixed;
bottom:20px;
left:50%;
transform:translateX(-50%);
background:#16a34a;
color:white;
border:none;
padding:16px 28px;
border-radius:50px;
font-size:16px;
cursor:pointer;
box-shadow:0 10px 30px rgba(0,0,0,.3);
}

@media(max-width:768px){

.container{
flex-direction:column;
}

.sidebar{
width:100%;
}

}
