/* Language */

var tnum = 'VN';


$(document).ready(function () {

    $(document).click(function (e) {
        $('.translate_wrapper, .more_lang').removeClass('active1');
    });

    $('.translate_wrapper .current_lang').click(function (e) {
        e.stopPropagation();
        $(this).parent().toggleClass('active1');

        setTimeout(function () {
            $('.more_lang').toggleClass('active1');
        }, 5);
    });


    /*TRANSLATE*/
    translate(tnum);

    $('.more_lang .lang').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.more_lang').removeClass('active1');

        var img = $(this).find('img').attr('src');
        var lang = $(this).attr('data-value');
        var tnum = lang;
        translate(tnum);

        $('.current_lang .lang-txt').text(lang);

        $('.current_lang img').attr('src', img);

        /* ---- */

        if ($(this).attr('data-value') == 'VN') {
            document.getElementsByName('tbxFullName')[0].placeholder = 'Tên của bạn là gì?';
            document.getElementsByName('tbxPhone')[0].placeholder = 'Số điện thoại liên lạc của bạn là gì?';
            document.getElementsByName('tbxEmail')[0].placeholder = 'Email liên hệ của bạn là gì?';
            document.getElementsByName('tbxContent')[0].placeholder = 'Dịch vụ mà bạn mong muốn là gì?';
            document.getElementsByName('btnSubmit')[0].value = 'Gửi';
            document.getElementsByName('nameTestCall')[0].placeholder = 'Họ và tên';
            document.getElementsByName('phoneTestCall')[0].placeholder = 'Số điện thoại';
            document.getElementsByName('securityCode')[0].placeholder = 'Mã bảo mật';

        }
        else if ($(this).attr('data-value') == 'ENG') {
            document.getElementsByName('tbxFullName')[0].placeholder = 'What is your name?';
            document.getElementsByName('tbxPhone')[0].placeholder = 'What is your contact phone number?';
            document.getElementsByName('tbxEmail')[0].placeholder = 'What is your contact email?';
            document.getElementsByName('tbxContent')[0].placeholder = 'What service do you want?';
            document.getElementsByName('btnSubmit')[0].value = 'Send';
            document.getElementsByName('nameTestCall')[0].placeholder = 'Name';
            document.getElementsByName('phoneTestCall')[0].placeholder = 'Phone number';
            document.getElementsByName('securityCode')[0].placeholder = 'Security code';

        }
        /* ---- */
    });
});

function translate(tnum) {
    $('.home').text(trans[0][tnum]);
    $('.introduce').text(trans[1][tnum]);
    $('.service').text(trans[2][tnum]);
    $('.contact').text(trans[3][tnum]);
    $('.login-lang').text(trans[4][tnum]);
    $('.register-lang').text(trans[5][tnum]);
    $('.simple-operation-title').text(trans[6][tnum]);
    $('.simple-operation-content').text(trans[7][tnum]);
    $('.cost-matching-title').text(trans[8][tnum]);
    $('.cost-matching-content').text(trans[9][tnum]);
    $('.high-productivity-title').text(trans[10][tnum]);
    $('.high-productivity-content').text(trans[11][tnum]);
    $('.absolute-security-title').text(trans[12][tnum]);
    $('.absolute-security-content').text(trans[13][tnum]);
    $('.services-experience .services-title').text(trans[14][tnum]);
    $('.services-experience .services-provided').text(trans[15][tnum]);
    $('.formTestCall .btnTest').text(trans[16][tnum]);
    $('.our-solution .services-subtitle').text(trans[17][tnum]);
    $('.our-solution .services-title').text(trans[18][tnum]);
    $('.our-solution .services-text').text(trans[19][tnum]);
    $('.our-solution .see-price-list').text(trans[20][tnum]);
    $('.pricing-container .pricing-title h2').text(trans[21][tnum]);
    $('.pricing-container .pricing-title p').text(trans[22][tnum]);
    $('.pricing-card-section .personal-use').text(trans[23][tnum]);
    $('.pricing-all-plan-features-section .personal-server').text(trans[24][tnum]);
    $('.pricing-all-plan-features-section .personal-robocalls').text(trans[25][tnum]);
    $('.pricing-all-plan-features-section .personal-autoConnect').text(trans[26][tnum]);
    $('.pricing-all-plan-features-section .personal-workspace').text(trans[27][tnum]);
    $('.pricing-all-plan-features-section .personal-ipopup').text(trans[28][tnum]);
    $('.pricing-all-plan-features-section .personal-diligence').text(trans[29][tnum]);
    $('.pricing-all-plan-features-section .personal-tourHotline').text(trans[30][tnum]);
    $('.pricing-all-plan-features-section .personal-govern').text(trans[31][tnum]);
    $('.pricing-all-plan-features-section .personal-statistic').text(trans[32][tnum]);
    $('.pricing-card-section .use-now').text(trans[33][tnum]);
    $('.pricing-card-section .team-use').text(trans[34][tnum]);
    $('.contact-section .contact-title').text(trans[35][tnum]);
    $('.contact-section .contact-subtitle').text(trans[36][tnum]);
    $('.name-lang').text(trans[37][tnum]);
    $('.phone-lang').text(trans[38][tnum]);
    $('.field-lang').text(trans[39][tnum]);
    $('.real-estate').text(trans[40][tnum]);
    $('.stock').text(trans[41][tnum]);
    $('.finance-support').text(trans[42][tnum]);
    $('.car').text(trans[43][tnum]);
    $('.insurrance').text(trans[44][tnum]);
    $('.education').text(trans[45][tnum]);
    $('.beauty-salon').text(trans[46][tnum]);
    $('.dentistry').text(trans[47][tnum]);
    $('.note').text(trans[48][tnum]);
    $('.clients-title').text(trans[49][tnum]);
    $('.clients-content').text(trans[50][tnum]);
    $('.company-contact').text(trans[51][tnum]);
    $('.company-name').text(trans[52][tnum]);
    $('.company-address').text(trans[53][tnum]);
    $('.company-address-location').text(trans[54][tnum]);
    $('.company-connect').text(trans[55][tnum]);
    $('.other-service-packs').text(trans[56][tnum]);
    $('.pricing-target-personal').text(trans[57][tnum]);
    $('.pricing-target-team').text(trans[58][tnum]);
    $('.title-start').text(trans[59][tnum]);
    $('.title-center').text(trans[60][tnum]);
    $('.slider-content .content-1').text(trans[61][tnum]);
    $('.bn-sms-title').text(trans[62][tnum]);
    $('.bn-sms-content').text(trans[63][tnum]);
    $('.services-title-sms').text(trans[64][tnum]);
    $('.text-bn-sms').text(trans[65][tnum]);
    $('.pricing-target-ads').text(trans[66][tnum]);
    $('.pricing-sms-ads').text(trans[67][tnum]);
    $('.pricing-target-care').text(trans[68][tnum]);
    $('.pricing-sms-care').text(trans[69][tnum]);
    $('.slider-content-sms').text(trans[70][tnum]);
    $('.title-end').text(trans[71][tnum]);
    $('.slider-content .content-2').text(trans[72][tnum]);
    $('.slider-content .content-3').text(trans[73][tnum]);
    $('.other').text(trans[74][tnum]);
    $('.pricing-all-plan-features-section .personal-apps').text(trans[75][tnum]);
    $('.personal-setting').text(trans[76][tnum]);
    $('.personal-internet').text(trans[77][tnum]);
    $('.personal-device').text(trans[78][tnum]);
    $('.personal-switchboard').text(trans[79][tnum]);


}

var trans = [
    {
        ENG: 'Home',
        VN: 'Trang chủ',
    }, {
        ENG: 'About us',
        VN: 'Giới thiệu',
    }, {
        ENG: 'Services',
        VN: 'Dịch vụ',
    },
    {
        ENG: 'Contact',
        VN: 'Liên hệ',
    },
    {
        ENG: 'Sign In',
        VN: 'Đăng nhập',
    },
    {
        ENG: 'Sign Up',
        VN: 'Đăng ký',
    },
    {
        ENG: 'Simple Operation',
        VN: 'Vận hành đơn giản',
    },
    {
        ENG: 'Technology is designed from the beginning for individual Clients who do not need to know much about computers. You will surely know how to use it in less than 10 minutes of the Tutorial!',
        VN: 'Công nghệ được thiết kế ngay từ đầu dành cho đối tượng Khách hàng là Cá Nhân, không cần biết nhiều về máy tính. Chắc chắn bạn sẽ biết cách sử dụng chỉ trong thời gian Hướng Dẫn dưới 10 phút!',
    },

    {
        ENG: 'Cost Matching',
        VN: 'Chi phí phù hợp',
    },
    {
        ENG: 'Only from VND 2,500,000 / Month but will replace the equivalent of at least 20 people to support you, freeing yourself from repetitive, repetitive tasks every day. ',
        VN: 'Chỉ từ 2.500.000 VNĐ/ Tháng nhưng sẽ thay thế cho một lượng công việc tương đương ít nhất 20 người hỗ trợ bạn. Giải phóng bạn khỏi những công việc nhàm chán lặp đi lặp lại mỗi ngày.',
    },
    {
        ENG: 'High Productivity',
        VN: 'Năng suất cao',
    },
    {
        ENG: 'Applying automation technology, combining work tracking with A.I and analyzing customer data by Big Data. The system allows for maximum time saving and support can you focus time working each day for the most productive jobs. Mobile Apps allows to track Clients & Jobs from anywhere in the world, just Internet.',
        VN: 'Áp dụng công nghệ tự động hóa, kết hợp theo dõi công việc bằng A.I và  phân tích dữ liệu khách hàng bằng Big Data. Hệ thống cho phép tiết kiệm thời gian tối đa và hỗ trợ có thể bạn tập trung thời gian làm việc mỗi ngày cho các công việc mang lại hiệu suất cao nhất. Mobile Apps cho phép theo dõi Khách Hàng & Công Việc từ bất cứ đâu trên thế giới, chỉ cần có Internet.',
    },

    {
        ENG: 'Absolute Security 100%',
        VN: 'Bảo mật tuyệt đối 100%',
    },

    {
        ENG: 'Technology transfer model using separate Server. We will turn your home desktop into a Private Server so that it can function as your own technology. All business secrets, Customer information will be stored and Back Up completely automatically and 100% secure. Even we ourselves will not be able to access the system without your permission. ',
        VN: 'Mô hình chuyển giao công nghệ sử dụng Server riêng. Chúng tôi sẽ biến chiếc máy tính bàn tại nhà của bạn trở thành một Private Server để có thể vận hành như một công nghệ phục vụ cho riêng bạn. Tất cả mọi bí mật kinh doanh, thông tin Khách Hàng sẽ được lưu trữ và Back Up một cách tự động hoàn toàn và bảo mật tuyệt đối 100%. Kể cả chính chúng tôi cũng sẽ không thể truy cập vào hệ thống nếu không được sự cho phép của bạn.',
    },

    {
        ENG: 'Experience Now',
        VN: 'Trải nghiệm ngay',
    },

    {
        ENG: 'pioneering in the application of Technology to improve the performance of individuals doing business in Real Estate, Insurance and high-end service industries. The latest version of Smart Call Center service package - Virtual Assistant will help optimize the cost of finding and taking care of your Customers to only 2.5 million VND per month (instead of spending tens of millions of VND each month for other Digital Marketing channels).',
        VN: 'tiên phong trong việc áp dụng Công Nghệ để nâng cao hiệu suất hoạt động của các Cá nhân đang kinh doanh về Bất Động Sản, Bảo Hiểm và các ngành dịch vụ cao cấp. Phiên bản mới nhất của gói dịch vụ Smart Call Center – Trợ Lí Ảo sẽ giúp tối ưu chi phí tìm kiếm và chăm sóc Khách Hàng của bạn đến mức chỉ còn 2.5 triệu đồng mỗi tháng ( thay cho việc tiêu tốn hàng chục triệu đồng mỗi tháng cho các kênh Marketing Digital khác).',
    },

    {
        ENG: 'Start Demo',
        VN: 'Bắt đầu Demo',
    },

    {
        ENG: 'Our Solution',
        VN: 'Giải pháp của chúng tôi',
    },
    {
        ENG: 'Sales Growth',
        VN: 'Tăng trưởng doanh số bán hàng',
    },
    {
        ENG: 'Solutions to help you reach and connect with customers interested in products and services. Support customer care through intelligent virtual assistants from system software.',
        VN: 'Giải pháp giúp bạn tiếp cận và kết nối với khách hàng quan tâm sản phẩm, dịch vụ. Hỗ trợ chăm sóc tập khách hàng thông qua trợ lý ảo thông minh từ phần mềm hệ thống.',
    },
    {
        ENG: 'See price list',
        VN: 'Xem bảng giá',
    },
    {
        ENG: 'Cost of Technology Transfer',
        VN: 'Chi phí chuyển giao công nghệ',
    },
    {
        ENG: 'Number conversion, have you heard a lot? So we will get you done with the transition tomorrow!',
        VN: 'Chuyển đổi số, bạn đã nghe rất nhiều ?. Vậy chúng tôi sẽ giúp bạn chuyển đổi hoàn tất ngay ngày mai!',
    },
    {
        ENG: 'Reasonable choice for personal use',
        VN: 'Lựa chọn hợp lý cho cá nhân sử dụng',
    },
    {
        ENG: 'Private server, 100% absolute security',
        VN: 'Server riêng, đảm bảo bảo mật tuyệt đối 100%',
    },
    {
        ENG: 'Robocalls - Automated machine transfer scripts',
        VN: 'Robocalls - Kịch bản chuyển máy tự động',
    },
    {
        ENG: 'Auto Connect - Increases Telesales productivity by 10 times',
        VN: 'Auto Connect - Nâng cao năng suất Telesales gấp 10 lần',
    },
    {
        ENG: 'Workspace - Customer resource management system',
        VN: 'Workspace - Hệ quản trị tài nguyên nguồn khách hàng',
    },
    {
        ENG: 'I-Pop Up - Get to know your customers right away',
        VN: 'I-Pop Up - Hiểu về khách hàng ngay khi trò chuyện',
    },
    {
        ENG: 'Attendance Reporting - Breakthrough feature for administrators',
        VN: 'Báo cáo chuyên cần - Tính năng đột phá cho quản trị viên',
    },
    {
        ENG: 'The Tour Hotline is fully automated',
        VN: 'Phân Tour Hotline tự động động hoàn toàn',
    },
    {
        ENG: 'Call history administration - 100% call recording',
        VN: 'Quản trị lịch sử cuộc gọi - Ghi âm cuộc gọi 100%',
    },
    {
        ENG: 'Smart Statistics - Smart Reminder',
        VN: 'Thống kê thông minh - Nhắc việc thông minh',
    },
    {
        ENG: 'Use Now',
        VN: 'Sử dụng ngay',
    },
    {
        ENG: 'Reasonable choice for team use',
        VN: 'Lựa chọn hợp lý cho đội nhóm sử dụng',
    },
    {
        ENG: 'Contact Now',
        VN: 'Liên hệ ngay',
    },
    {
        ENG: 'We will contact you as soon as we receive the letter. We are happy to answer any questions you may have, feel free to contact us!',
        VN: 'Chúng tôi sẽ liên hệ với quý khách ngay khi nhận được thư. Chúng tôi rất sẵn lòng trả lời bất kỳ câu hỏi nào của bạn, hãy liên hệ với chúng tôi!',
    },
    {
        ENG: 'Name',
        VN: 'Tên',
    },
    {
        ENG: 'Phone number',
        VN: 'Số điện thoại',
    },
    {
        ENG: 'Your field',
        VN: 'Lĩnh vực',
    },
    {
        ENG: 'Real Estate',
        VN: 'Bất động sản',
    },
    {
        ENG: 'Stock',
        VN: 'Chứng khoán',
    },
    {
        ENG: 'Finance Support',
        VN: 'Tư vấn tài chính',
    },
    {
        ENG: 'Car',
        VN: 'Ô tô',
    },
    {
        ENG: 'Insurrance',
        VN: 'Bảo hiểm',
    },
    {
        ENG: 'Education',
        VN: 'Giáo dục',
    },
    {
        ENG: 'Beauty Salon',
        VN: 'Thẩm mỹ viện',
    },
    {
        ENG: 'Dentistry',
        VN: 'Nha khoa',
    },
    {
        ENG: 'Note',
        VN: 'Ghi chú',
    },
    {
        ENG: 'Partner Used The Product',
        VN: 'Đối tác đã sử dụng sản phẩm',
    },
    {
        ENG: 'with the aim of maximizing customers for our partners when using the product, we always bring the best customer experience when using the system.',
        VN: 'đặt mục tiêu tối đa hóa khách hàng cho đối tác khi sử dụng sản phẩm, chúng tôi luôn mang đến những trải nghiệm tốt nhất cho khách hàng khi sử dụng hệ thống.',
    },
    {
        ENG: 'Contact Us',
        VN: 'Liên hệ với chúng tôi',
    },
    {
        ENG: 'ANH DUONG ENTERPRISE SOLUTIONS JOINT STOCK COMPANY.',
        VN: 'CÔNG TY CP GIẢI PHÁP DOANH NGHIỆP ÁNH DƯƠNG.',
    },
    {
        ENG: '17 Street No. 4, Him Lam Residential Area',
        VN: 'Số 17 Đường số 4, KDC Him Lam',
    },
    {
        ENG: 'Tan Hung Ward, District 7, Ho Chi Minh City.',
        VN: 'Phường Tân Hưng, Quận 7, Thành phố Hồ Chí Minh.',
    },
    {
        ENG: 'Connect with us',
        VN: 'Kết nối với chúng tôi',
    },

    {
        ENG: 'Other Service Packs',
        VN: 'Các gói dịch vụ khác',
    },
    {
        ENG: 'Personal Call Center Transfer',
        VN: 'Chuyển giao Call Center Cá nhân',
    },
    {
        ENG: 'Team Call Center Transfer',
        VN: 'Chuyển giao Call Center Đội nhóm',
    },
    {
        ENG: 'BREAKTHROUGH SOLUTION USING A.I',
        VN: 'GIẢI PHÁP ĐỘT PHÁ SỬ DỤNG A.I ',
    },
    {
        ENG: 'IN MANAGEMENT AND AUTOMATION',
        VN: 'TRONG QUẢN TRỊ VÀ TỰ ĐỘNG HÓA',
    },
    {
        ENG: 'We are a pioneer in applying Technology to improve the performance of individuals doing business in Real Estate, Insurance and high-end service industries. The latest version of Smart Call Center service package - Virtual Assistant will help optimize the cost of finding and taking care of your Customers to only 2.5 million VND per month (instead of spending tens of millions of VND each month for other Digital Marketing channels).',
        VN: 'Chúng tôi là đơn vị tiên phong trong việc áp dụng Công Nghệ để nâng cao hiệu suất hoạt động của các Cá nhân đang kinh doanh về Bất Động Sản, Bảo Hiểm và các ngành dịch vụ cao cấp. Phiên bản mới nhất của gói dịch vụ Smart Call Center – Trợ Lí Ảo sẽ giúp tối ưu chi phí tìm kiếm và chăm sóc Khách Hàng của bạn đến mức chỉ còn 2.5 triệu đồng mỗi tháng ( thay cho việc tiêu tốn hàng chục triệu đồng mỗi tháng cho các kênh Marketing Digital khác).',
    },
    {
        ENG: 'PRICE LIST OF SMS BRANDNAME SERVICE',
        VN: 'BẢNG GIÁ DỊCH VỤ SMS BRANDNAME',
    },
    {
        ENG: 'is a mass messaging service that allows businesses to send marketing and customer care messages up to 160 characters in length to multiple mobile subscribers. The brand name appears in the sender field instead of the specific phone number.',
        VN: 'là một dịch vụ gửi tin nhắn hàng loạt cho phép các doanh nghiệp gửi tin nhắn tiếp thị và chăm sóc khách hàng có độ dài tối đa 160 ký tự đến nhiều thuê bao di động. Tên thương hiệu sẽ hiển thị ở mục người gửi thay vì số điện thoại cụ thể.',
    },
    {
        ENG: 'What is SMS Brandname ?',
        VN: 'SMS Brandname là gì ?',
    },
    {
        ENG: 'is a brand message sent to customers for the purpose of advertising or customer care. The special thing about this brand message (SMS BrandName) is that in the headline will have your brand name instead of numbers.',
        VN: 'là tin nhắn thương hiệu được gửi đến khách hàng với mục đích quảng cáo hoặc chăm sóc khách hàng. Điều đặc biệt ở tin nhắn thương hiệu ( SMS BrandName ) này đó là ở phần tiêu đề sẽ có tên thương hiệu của bạn thay vì những con số.',
    },
    {
        ENG: 'SMS Brandname - Advertising',
        VN: 'SMS Brandname - Quảng cáo',
    },
    {
        ENG: 'Reasonable choice for product advertising messages',
        VN: 'Lựa chọn hợp lý cho tin nhắn quảng cáo sản phẩm',
    }, {
        ENG: 'SMS Brandname - Customer Care',
        VN: 'SMS Brandname - CSKH',
    }, {
        ENG: 'Customer care messages',
        VN: 'Tin nhắn chăm sóc khách hàng',
    },
    {
        ENG: 'It is a one-way messaging system (SMS Marketing), using a prepaid account, with the sender being the brand name (Brandname).',
        VN: 'Là hệ thống gửi tin một chiều (SMS Marketing), sử dụng tài khoản trả trước, với người gửi là tên thương hiệu (Brandname).',
    }, {
        ENG: 'COMMUNICATE WITH CUSTOMERS',
        VN: 'GIAO TIẾP VỚI KHÁCH HÀNG',
    },
    {
        ENG: 'Number conversion, have you heard a lot? So we will get you done with the transition tomorrow! ',
        VN: 'Chuyển đổi số, bạn đã nghe rất nhiều ?. Vậy chúng tôi sẽ giúp bạn chuyển đổi hoàn tất ngay ngày mai!',
    },
    {
        ENG: 'Why not?',
        VN: 'Tại sao Không?',
    },
    {
        ENG: 'Others',
        VN: 'Lĩnh vực khác',
    },
    {
        ENG: 'Mobile Apps - Remote monitoring and management of customers',
        VN: 'Mobile Apps - Theo dõi và quản trị khách hàng từ xa',
    },
    {
        ENG: 'Requirements for server & line configuration: ',
        VN: 'Yêu cầu cấu hình máy chủ & đường truyền:',
    },
    {
        ENG: 'Internet connection with Static IP ',
        VN: 'Đường truyền Internet có IP Tĩnh',
    },
    {
        ENG: 'Hardware equipment required: ',
        VN: 'Thiết bị phần cứng cần trang bị:',
    },
    {
        ENG: 'Switchboard equipment UCM6301: ~ 7,900,000 VND',
        VN: 'Thiết bị tổng đài UCM6301: ~ 7.900.000 VNĐ',
    },

];
