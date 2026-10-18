:root{
  --bg:#f7f9fc;
  --card:#ffffff;
  --muted:#556070;
  --accent:#ffcb05;
  --primary:#3b4cca;
  --shadow:0 20px 60px rgba(16, 32, 39, 0.22);
}
*{box-sizing:border-box}
html,body{height:100%}
body{font-family:Inter,system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;background:var(--bg);color:#102027;margin:0}
.container{width:min(980px,calc(100% - 32px));margin:0 auto;padding:28px}
.site-header{background:linear-gradient(90deg,var(--primary),#6b7bff);color:#fff;padding:28px 0;border-bottom:4px solid rgba(0,0,0,0.06)}
.site-header h1{margin:0;font-size:1.6rem}
.site-header p{margin-top:6px;opacity:0.95}
.main{padding:28px 0}
.search form{display:flex;gap:8px;align-items:center}
.search input{flex:1;padding:12px 14px;border-radius:10px;border:1px solid rgba(16,32,39,0.08);font-size:1rem}
.search button{padding:10px 14px;border-radius:10px;border:none;background:var(--primary);color:#fff;font-weight:700;cursor:pointer}
#randomBtn{background:#4caf50}
.message{margin-top:12px;color:var(--muted)}

.result {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: grid;
  place-items: center;
  padding: 24px;
}
.result[hidden] { display: none; }
.result .backdrop {
  position: absolute;
  inset: 0;
  background: rgba(9, 16, 26, 0.7);
  backdrop-filter: blur(6px);
}
.result .card{
  position: relative;
  z-index: 1;
  width: min(760px, 100%);
  display:flex;
  gap:18px;
  background:var(--card);
  border-radius:22px;
  padding:22px 20px 18px;
  box-shadow:var(--shadow);
  align-items:center;
  animation: fadeUp .22s ease;
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px) scale(.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
.close-btn {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 34px;
  height: 34px;
  border: none;
  border-radius: 50%;
  background: rgba(16,32,39,0.08);
  font-size: 1.6rem;
  line-height: 1;
  cursor: pointer;
}
.sprite img{width:220px;height:220px;object-fit:contain}
.info h2{margin:0;text-transform:capitalize}
.meta{display:flex;gap:12px;align-items:center;margin-top:6px;flex-wrap:wrap}
.types{display:flex;gap:8px;flex-wrap:wrap}
.type-pill{padding:6px 10px;border-radius:999px;background:linear-gradient(90deg,rgba(0,0,0,0.04),rgba(0,0,0,0.02));font-weight:700;text-transform:capitalize}
.list{list-style:none;padding-left:0;margin-top:10px}
.list li { margin-bottom: 6px; text-transform: capitalize; }
.stats li{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px dashed rgba(16,32,39,0.04)}
.more{margin-top:22px}
.history{display:flex;gap:8px;flex-wrap:wrap}
.hist-item{background:#fff;padding:8px 12px;border-radius:999px;border:1px solid rgba(16,32,39,0.04);cursor:pointer}
.site-footer{padding:20px 0;border-top:1px solid rgba(16,32,39,0.04);margin-top:36px;color:var(--muted)}
@media(max-width:720px){
  .result .card{flex-direction:column;align-items:flex-start;padding-top:42px}
  .sprite img{width:180px;height:180px}
}
