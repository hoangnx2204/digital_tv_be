const express = require('express')
const app = express()

app.get('/iptv', (req, res) => {
    return res.send(`
       #EXTM3U url-tvg="http://lichphatsong.xyz/schedule/epg.xml"
#EXTINF:0 tvg-id="vtv1hd" group-title="🦐 VTV" group-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Vietnam_Television_logo_from_2013.svg/640px-Vietnam_Television_logo_from_2013.svg.png" tvg-logo="https://i.imgur.com/nfkmvAY.png",VTV1 HD
https://live.fptplay53.net/fnxch2/vtv1hd_abr.smil/chunklist_b4200000.m3u8
htt@ps://zenlive.onsports.vn/onplus/VTV1_HD/sc-gaFEAA/index.m3u8
#EXTINF:-1 tvg-id="vtv2hd" group-title="🦐 VTV" group-logo="https://cdn.hqth.me/logo/category/vtv.png" tvg-logo="https://static.wikia.nocookie.net/logos/images/b/bd/VTV2_01-08.01.2020_v%C3%A0_01.11.2022-nay.png/revision/latest?cb=20230928042838&path-prefix=vi" catchup-type="append" catchup-days="2" catchup-source="?s=\${start}&e=\${end}", VTV2 HD
https://live.fptplay53.net/fnxch2/vtv2hd_abr.smil/chunklist_b4200000.m3u8
#EXTINF:-1 tvg-id="vtv3hd" group-title="🦐 VTV" tvg-logo="https://static.wikia.nocookie.net/logos/images/3/33/VTV3_01.11.2022-nay.png/revision/latest?cb=20240209160522&path-prefix=vi" catchup-type="append" catchup-days="2" catchup-source="?s=\${start}&e=\${end}", VTV3 HD
https://live.fptplay53.net/fnxch2/vtv3hd_abr.smil/chunklist_b4200000.m3u8
#EXTINF:-1 tvg-id="vtv4hd" group-title="🦐 VTV" tvg-logo="https://static.wikia.nocookie.net/logos/images/c/c9/VTV4_21.02.2023-nay.png/revision/latest?cb=20230928042845&path-prefix=vi", VTV4 HD
https://live.fptplay53.net/fnxch2/vtv4hd_abr.smil/chunklist_b4200000.m3u8
#EXTINF:-1 tvg-id="vtv5hd" group-title="🦐 VTV" tvg-logo="https://static.wikia.nocookie.net/logos/images/6/6f/VTV5_26.11.2019.png/revision/latest/scale-to-width-down/220?cb=20240322075730&path-prefix=vi", VTV5 HD
https://live.fptplay53.net/epzch2/vtv5hd_abr.smil/chunklist_b4200000.m3u8
#EXTINF:-1 tvg-id="vtv5hdtnb" group-title="🦐 VTV" tvg-logo="https://static.wikia.nocookie.net/logos/images/6/6f/VTV5_26.11.2019.png/revision/latest/scale-to-width-down/220?cb=20240322075730&path-prefix=vi", VTV5 TÂY NAM BỘ HD
https://live.fptplay53.net/fnxhd1/vtv5tnb_vhls.smil/chunklist_b5000000.m3u8
#EXTINF:-1 tvg-id="vtv5hdtn" group-title="🦐 VTV" tvg-logo="https://static.wikia.nocookie.net/logos/images/6/6f/VTV5_26.11.2019.png/revision/latest/scale-to-width-down/220?cb=20240322075730&path-prefix=vi", VTV5 TÂY NGUYÊN HD
https://live.fptplay53.net/fnxhd1/vtv5taynguyen_vhls.smil/chunklist_b5000000.m3u8
#EXTINF:-1 tvg-id="vtv7hd" group-title="🦐 VTV" tvg-logo="https://static.wikia.nocookie.net/logos/images/d/d6/VTV7_01-08.01.2020_v%C3%A0_31.10.2022-nay.png/revision/latest/scale-to-width-down/220?cb=20220602112740&path-prefix=vi", VTV7 HD
https://live.fptplay53.net/fnxhd1/vtv7hd_vhls.smil/chunklist_b5000000.m3u8
#EXTINF:-1 tvg-id="vtv8hd" group-title="🦐 VTV" tvg-logo="https://static.wikia.nocookie.net/logos/images/5/5b/VTV8_01-09.01.2020_v%C3%A0_29.06.2022-nay.png/revision/latest?cb=20220602112826&path-prefix=vi", VTV8 HD
https://live.fptplay53.net/epzhd1/vtv8hd_vhls.smil/chunklist_b5000000.m3u8
#EXTINF:-1 tvg-id="vtv9hd" group-title="🦐 VTV" tvg-logo="https://static.wikia.nocookie.net/logos/images/3/35/VTV9_logo_%282013-nay%29.png/revision/latest?cb=20201228131939&path-prefix=vi", VTV9 HD
https://live.fptplay53.net/epzch2/vtv9hd_abr.smil/chunklist_b4200000.m3u8
#EXTINF:-1 tvg-id="vtv6hd" group-title="🦐 VTV" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/b/bf/Logo_vtv_c%E1%BA%A7n_th%C6%A1_2022.png", VTV CẦN THƠ HD
https://live.fptplay53.net/fnxch2/vtvcantho_abr.smil/chunklist_b4200000.m3u8
#EXTINF:-1 tvg-id="antvhd" group-title="💕TRUNG ƯƠNG" group-logo=https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1280px-Flag_of_Vietnam.svg.png" tvg-logo="https://static.wikia.nocookie.net/logos/images/1/19/ANTV_HD_logo_ch%C3%ADnh_12-2016.png/revision/latest/scale-to-width-down/200?cb=20220918050224&path-prefix=vi", ANTV HD
https://live.fptplay53.net/fnxhd2/anninhtv_vhls.smil/chunklist_b5000000.m3u8
#EXTINF:-1 tvg-id="qpvnhd" group-title="💕TRUNG ƯƠNG" group-logo=https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1280px-Flag_of_Vietnam.svg.png" tvg-logo="https://static.wikia.nocookie.net/logos/images/d/d1/QPVN_logo_2014_2.png/revision/latest/scale-to-width-down/200?cb=20220827101546&path-prefix=vi", QPVN HD 
https://live.fptplay53.net/fnxhd2/quocphongvnhd_vhls.smil/chunklist_b5000000.m3u8
#EXTINF:0 tvg-id="htv2hd" group-title="👹 HTV" tvg-logo="https://i.imgur.com/f3KlwDX.png",HTV2 HD
https://live.fptplay53.net/epzhd1/htv2hd_vhls.smil/chunklist_b5000000.m3u8
#EXTINF:0 tvg-id="htv7hd" group-title="👹 HTV" tvg-logo="https://static.wikia.nocookie.net/logos/images/e/e3/HTV7_31-12-2024.png/revision/latest/scale-to-width-down/220?cb=20241231101757&path-prefix=vi",HTV7 HD
https://live.fptplay53.net/epzhd1/htv7hd_vhls.smil/chunklist_b5000000.m3u8
#EXTINF:0 tvg-id="htv9hd" group-title="👹 HTV" tvg-logo="https://static.wikia.nocookie.net/logos/images/6/69/HTV9_31-12-2024.png/revision/latest/scale-to-width-down/220?cb=20241231101756&path-prefix=vi",HTV9 HD
https://live.fptplay53.net/epzhd1/htv9hd_vhls.smil/chunklist_b5000000.m3u8
#EXTINF:0 tvg-id="htvthethaohd" group-title="👹 HTV" tvg-logo="https://i.imgur.com/z7NOxJ3.png",HTV Thể Thao HD
https://live.fptplay53.net/epzhd1/htvcthethao_vhls.smil/chunklist_b5000000.m3u8
#EXTINF:0 tvg-id="htvcthuanviet" group-title="👹 HTV" tvg-logo="https://static.wikia.nocookie.net/logos/images/3/3d/HTVC_Thu%E1%BA%A7n_Vi%E1%BB%87t_2016.png/revision/latest?cb=20220428041703&path-prefix=vi",HTVC Thuần Việt HD
https://live.fptplay53.net/epzhd1/htvcthuanviethd_vhls.smil/chunklist_b5000000.m3u8
#EXTINF:0 tvg-id="htvcgiadinhhd" group-title="👹 HTV" tvg-logo="https://static.wikia.nocookie.net/logos/images/1/15/HTVC_Gia_%C4%91%C3%ACnh_logo.png/revision/latest?cb=20210625041805&path-prefix=vi",HTVC Gia Đình HD
https://live.fptplay53.net/epzhd1/htvcgiadinh_vhls.smil/chunklist_b5000000.m3u8
#EXTINF:0 tvg-id="htvcphunuhd" group-title="👹 HTV" tvg-logo="https://i.imgur.com/PLliKL6.png",HTVC Phụ Nữ HD
https://live.fptplay53.net/epzhd1/htvcphunu_vhls.smil/chunklist_b5000000.m3u8
#EXTINF:0 tvg-id="htvcphimhd" group-title="👹 HTV" tvg-logo="https://static.wikia.nocookie.net/logos/images/4/4a/HTVC_Phim_2017.png/revision/latest?cb=20210921122003&path-prefix=vi",HTVC Phim HD
https://live.fptplay53.net/epzhd1/htvcmovieshd_vhls.smil/chunklist_b5000000.m3u8
#EXTINF:0 tvg-id="htvccanhachd" group-title="👹 HTV" tvg-logo="https://static.wikia.nocookie.net/logos/images/7/71/HTVC_Ca_nh%E1%BA%A1c_2013_c%C3%B3_website.png/revision/latest?cb=20240614152930&path-prefix=vi",HTVC Ca Nhạc HD
https://live.fptplay53.net/epzhd1/htvcmusic_vhls.smil/chunklist_b5000000.m3u8
#EXTINF:0 tvg-id="htvcdulichhd" group-title="👹 HTV" tvg-logo="https://i.imgur.com/XxIO0E0.png",HTVC Du Lịch và Cuộc Sống HD
https://live.fptplay53.net/epzhd1/htvcdulich_vhls.smil/chunklist_b5000000.m3u8
#EXTINF:0 tvg-id="htvcplushd" group-title="👹 HTV" tvg-logo="https://static.wikia.nocookie.net/logos/images/f/fb/HTVC%2B_logo_2015_c%C3%B3_website.png/revision/latest?cb=20231112015159&path-prefix=vi",HTVC+ HD
https://live.fptplay53.net/epzhd1/htvcplus_vhls.smil/chunklist_b5000000.m3u8
#EXTINF:-1 tvg-id="angiang" group-title="🤩 Địa phương" group-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1280px-Flag_of_Vietnam.svg.png" tvg-logo="https://static.wikia.nocookie.net/logos/images/0/06/Logo_ATV_An_Giang_2022.png/revision/latest/scale-to-width-down/200?cb=20220414105243&path-prefix=vi",ATV HD - TRUYỀN HÌNH AN GIANG
https://live.fptplay53.net/epzsd1/angiang_hls.smil/chunklist_b2500000.m3u8
#EXTINF:-1 tvg-id="hanoi1" group-title="🤩 Địa phương" tvg-logo="https://static.wikia.nocookie.net/logos/images/8/84/HanoiTV1_HD_2022.png/revision/latest?cb=20240413010152&path-prefix=vi",Hà Nội 1 HD - TRUYỀN HÌNH THÀNH PHỐ HÀ NỘI
https://live.fptplay53.net/fnxhd2/hanoitv1_vhls.smil/chunklist_b5000000.m3u8
        `)
})

app.listen(3000, () => {
    console.log('app is running at port 3000')
})