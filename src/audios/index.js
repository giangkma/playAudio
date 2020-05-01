import chonhaumotkyniem from './chonhaumotkyniem.mp3';
import emchicannoico from './emchicannoico.mp3';
import noitachoem from './noitachoem.mp3';
import tinhsauthienthu from './tinhsauthienthu.mp3';
import voivang from './voivang.mp3';
import aichoai from './aichoai.mp3';
import anhnangcuaanh from './anhnangcuaanh.mp3';
import anhthuongemnhatma from './anhthuongemnhatma.mp3';
import danhchoem from './danhchoem.mp3';
import homnaytoibuon from './homnaytoibuon.mp3';
import khongcanphaihuadauem from './khongcanphaihuadauem.mp3';
import nguoiay from './nguoiay.mp3';
import tamsutuoi30 from './tamsutuoi30.mp3';
import tinhdonphuong from './tinhdonphuong.mp3';
import uocgi from './uocgi.mp3';
import votuyetvoinhat from './votuyetvoinhat.mp3';
import yeuemratnhieu from './yeuemratnhieu.mp3';
import yeulaitudau from './yeulaitudau.mp3';

const audios = [
    {
        src: chonhaumotkyniem,
        image:
            'https://pnpl.onecmscdn.com/2019/05/10/51437938_2080124948730848_3415068646127435776_n.jpg',
        title: 'Anh Tin Mình Đã Cho Nhau Một Kỉ Niệm (Acoustic Cover)',
        artist: 'PnP Band',
    },
    {
        src: emchicannoico,
        image:
            'https://zmp3-photo-fbcrawler.zadn.vn/avatars/7/d/a/1/7da16b5d9fc940762565b4a8cfec75ed.jpg',
        title: 'EM CHỈ CẦN NÓI CÓ',
        artist: 'Doãn Hiếu',
    },
    {
        src: noitachoem,
        image: 'https://i.ytimg.com/vi/cdkSV-mBg0s/maxresdefault.jpg',
        title: 'NƠI TA CHỜ EM',
        artist: ' WILL FT KAITY',
    },
    {
        src: tinhsauthienthu,
        image:
            'https://image.thanhnien.vn/768/uploaded/hienth/2020_04_14/zc-20200414-2_dpdq.png',
        title: 'Tình Sầu Thiên Thu Muôn Nối',
        artist: 'Doãn Hiếu',
    },
    {
        src: voivang,
        image: 'https://i.ytimg.com/vi/t0pEEbhEUk8/maxresdefault.jpg',
        title: 'Vội Vàng',
        artist: 'Tạ Quang Thắng',
    },
    {
        src: aichoai,
        image:
            'https://i1.sndcdn.com/artworks-000163649777-zf0mxj-t500x500.jpg',
        title: '#AiChoAi',
        artist: 'FloD ft. M! (Giang Nguyen)',
    },
    {
        src: anhnangcuaanh,
        image: 'https://i.ytimg.com/vi/AZ-zg-QH7Zs/maxresdefault.jpg',
        title: 'Ánh Nắng Của Anh',
        artist: 'Đức Phúc',
    },
    {
        src: anhthuongemnhatma,
        image:
            'https://s.mxmcdn.net/images-storage/albums5/2/7/7/0/1/9/43910772_500_500.jpg',
        title: 'Anh Thương Em Nhất Mà',
        artist: 'Lã. x Log x TiB',
    },
    {
        src: danhchoem,
        image:
            'http://hoctienghanquoc.org/uploads/tin-tuc/2019_03/hoc-tieng-han-qua-bai-hat-danh-cho-em.jpg',
        title: 'Dành Cho Em',
        artist: ' Hoàng Tôn',
    },
    {
        src: homnaytoibuon,
        image:
            'https://saotrucvietnam.com/wp-content/uploads/cam-am-hom-nay-toi-buon-min.jpg',
        title: 'Hôm Nay Tôi Buồn',
        artist: 'Phùng Khánh Link',
    },
    {
        src: khongcanphaihuadauem,
        image: 'http://s.nhac.vn/v1/seo/song/s1/0/0/175/179495.jpg',
        title: 'Không Cần Phải Hứa Đâu Em',
        artist: 'Phạm Khánh Hưng',
    },
    {
        src: nguoiay,
        image:
            'https://avatar-nct.nixcdn.com/song/2018/05/06/5/1/b/4/1525584647394_640.jpg',
        title: 'Người Ấy',
        artist: 'Trịnh Thăng Bình',
    },
    {
        src: tamsutuoi30,
        image: 'https://i.ytimg.com/vi/kV3famkRaA4/maxresdefault.jpg',
        title: 'Tâm Sự Tuổi 30 - OST Ông Ngoại Tuổi 30 ',
        artist: 'Trịnh Thăng Bình',
    },
    {
        src: tinhdonphuong,
        image:
            'https://avatar-nct.nixcdn.com/song/2018/02/05/5/3/f/4/1517804709410_640.jpg',
        title: 'Tình Đơn Phương (Acoustic Cover) ',
        artist: 'Dương Edward',
    },
    {
        src: uocgi,
        image:
            'https://avatar-nct.nixcdn.com/mv/2019/04/11/8/d/d/9/1554947353931_640.jpg',
        title: 'Ước Gì',
        artist: 'Jaykii',
    },
    {
        src: votuyetvoinhat,
        image:
            'https://lh3.googleusercontent.com/proxy/pW--2INlNcre8Au3OCIi5yJsaw4U5QeGK3UKgf2bpwDA9xS9271lyX8bkQDc_3QDwbLSslZs3NSeVdoNj7A1mEzpQ9TVltM47ZVA2vc55LN_ZD5UiKuo4mTVKUTW_YNK1kLKAPdTZrNhid7K',
        title: 'Vợ Tuyệt Vời Nhất',
        artist: 'Vũ Duy Khánh',
    },
    {
        src: yeuemratnhieu,
        image:
            'https://photo-zmp3.zadn.vn/covers/b/2/b2d7fda219a63962ad3c7a997d8821ee_1506397434.jpg',
        title: 'Yêu Em Rất Nhiều',
        artist: 'Hoàng Tôn',
    },
    {
        src: yeulaitudau,
        image:
            'https://avatar-nct.nixcdn.com/playlist/2013/11/06/c/c/a/8/1383711601543_500.jpg',
        title: 'Yêu Lại Từ Đầu',
        artist: 'Khắc Việt',
    },
];

export default audios;
