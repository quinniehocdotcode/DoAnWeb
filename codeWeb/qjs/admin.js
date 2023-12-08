var productArray = [
    {
        productId: 1,
        name: 'Vầng Trăng Máu',
        category: 'vanhoc',
        description: `Vầng trăng máu là một công trình nghiên cứu khá tận tâm, cho thấy một góc nhìn về những cuộc chiến tranh giành dầu mỏ ở quy mô nhỏ, gói gọn trong phạm vi các ngôi làng quy hoạch dành cho những thổ dân bản địa châu Mỹ vào đầu những năm 1900. Cuốn sách phơi bày lịch sử đẫm máu trải dài nhiều thập kỷ, mà nạn nhân chính là một trong những bộ tộc thổ dân hùng mạnh nhất thời bấy giờ, những người Osage.`,
        images: [
            'images/vangtrangmau.jpg',
            'images/giao_khoa_toan_12_page1.jpg',
            'images/giao_khoa_toan_12_page2.jpg'
        ],
        author: 'David Grann',
        price: '120.000',
        soluong: 10
    },
    {
        productId: 2,
        name: 'Đám Trẻ Ở Đại Dương Đen',
        category: 'vanhoc',
        description: `Đám trẻ ở đại dương đen là lời độc thoại và đối thoại của những đứa trẻ ở đại dương đen, nơi từng lớp sóng của nỗi buồn và tuyệt vọng không ngừng cuộn trào, lúc âm ỉ, khi dữ dội. Những đứa trẻ ấy phải vật lộn trong những góc tối tâm lý, với sự u uất đè nén từ tổn thương khi không được sinh ra trong một gia đình toàn vẹn, ấm êm, khi phải mang trên đôi vai non dại những gánh nặng không tưởng.

        Song song đó cũng là quá trình tự chữa lành vô cùng khó khăn của đám trẻ, cố gắng vươn mình ra khỏi đại dương đen, tìm cho mình một ánh sáng. Và chính những sự nỗ lực xoa dịu chính mình đó đã hóa thành những câu từ trong cuốn sách này, bất kể đau đớn thế nào.`,
        images: [
            'images/damtreodaiduong.jpg',
            'images/kinh_doanh_thanh_cong_page1.jpg',
            'images/kinh_doanh_thanh_cong_page2.jpg'
        ],
        author: 'Châu Sa Đáy Mắt',
        price: '69.300',
        soluong: 10
    },
    {
        productId: 3,
        name: 'Có Một Ngày, Bố Mẹ Sẽ Già Đi',
        category: 'vanhoc',
        description: `Mỗi ngày đều có thể nhìn thấy mặt trời, vào những ngày trời quang nắng đẹp, bạn cảm thấy ấm áp và dễ chịu, nó như một thứ đương nhiên nên có, hưởng thụ sự tốt đẹp nó mang lại đã trở thành thói quen của bạn. Nhưng nếu một ngày, có người nói với bạn mặt trời sẽ không mọc nữa, bạn cảm thấy thế nào? Có lẽ phần lớn mọi người đều cảm thấy sợ hãi và luống cuống. Bố mẹ cũng giống như mặt trời, luôn lặng lẽ ở sau lưng, cho bạn chỗ dựa và sự ấm áp, nhưng nếu một ngày bố mẹ không còn ở đấy nữa, cảm giác an toàn quen thuộc cũng lập tức biến mất, bấy giờ muốn tìm lại, sợ rằng đã quá muộn.

        Bởi vì năm tháng vẫn mãi trôi, thời gian không trở lại, tên siêu trộm thời gian đang dần dần lấy đi tuổi xuân của bố mẹ, rồi có một ngày, bố mẹ sẽ già đi.`,
        images: [
            'images/co-mot-ngay-bo-me-se-gia-di.jpg',
            'images/lich_su_the_gioi_page1.jpg',
            'images/lich_su_the_gioi_page2.jpg'
        ],
        author: 'Nhiều Tác Giả',
        price: '81.600',
        soluong: 10
    },
    {
        productId: 4,
        name: 'Sự Im Lặng Của Bầy Cừu (Tái Bản 2019)',
        category: 'vanhoc',
        description: `Sự im lặng của bầy cừu hội tụ đầy đủ những yếu tố làm nên một cuốn tiểu thuyết trinh thám kinh dị xuất sắc nhất: không một dấu vết lúng túng trong những chi tiết thuộc lĩnh vực chuyên môn, với các tình tiết giật gân, cái chết luôn lơ lửng, với cuộc so găng của những bộ óc lớn mà không có chỗ cho kẻ ngu ngốc để cuộc chơi trí tuệ trở nên dễ dàng. Bồi đắp vào cốt truyện lôi cuốn đó là cơ hội được trải nghiệm trong trí não của cả kẻ gây tội lẫn kẻ thi hành công lý, khi mỗi bên phải vật vã trong ngục tù của đau đớn để tìm kiếm, khẩn thiết và liên tục, một sự lắng dịu cho tâm hồn.`,
        images: [
            'images/su_im_lang_cua_bay_cuu.jpg',
            'images/tam_ly_hoc_co_ban_page1.jpg',
            'images/tam_ly_hoc_co_ban_page2.jpg'
        ],
        author: 'Thomas Harris',
        price: '92.000',
        soluong: 10
    },
    {
        productId: 5,
        name: 'Thời Kế Quán',
        category: 'vanhoc',
        description: `Tầm mười năm về trước, trong rừng sâu mọc lên một kiến trúc kì lạ tên là Thời Kế Quán, gồm một tháp đồng hồ chuyên chỉ giờ lung tung và một biệt thự chôn nửa xuống đất. Trước và sau khi xây Quán, có rất nhiều người liên quan đến nó đã chết, số người thiệt mạng gần đủ để trám kín các ô số trên mặt đồng hồ, lý do không rõ.
        Chỉ biết từ đó tháp và nhà gần như hoang phế, không ai nhớ đến nữa.
        Mười năm trôi qua, cây lá đã gần như phủ kín đường vào thì Thời Kế Quán nổi tiếng trở lại, do những người đi rừng bắt gặp ma trôi nổi quanh đó. Tin tức kích thích sự tò mò của một nhóm người chuyên nghiên cứu tâm linh. Họ mời một bà đồng cùng vào Quán để làm lễ gọi hồn, tìm hiểu chân tướng.`,
        images: [
            'images/thoikequan.jpg',
            'images/quan_tri_tam_ly_tinh_yeu_page1.jpg',
            'images/quan_tri_tam_ly_tinh_yeu_page2.jpg'
        ],
        author: 'Yukito Ayatsuji',
        price: '143.650',
        soluong: 10
    },
    {
        productId: 6,
        name: 'Án Mạng Mười Một Chữ',
        category: 'vanhoc',
        description: `Tình cờ phát hiện những điều bất thường sau cái chết thảm khốc của người yêu, nhân vật “tôi”, một nữ nhà văn viết tiểu thuyết trinh thám đã cùng bạn mình, Hagio Fuyuko, cũng là biên tập viên phụ trách sách của “tôi” quyết định điều tra về cái chết này. Trong quá trình điều tra hai người phát hiện người yêu của “tôi” đã từng gặp tai nạn lật thuyền trong chuyến du lịch đảo một năm trước. Và khi họ tìm tới những người cũng tham gia chuyến đi đó để tìm hiểu thì những người này cũng lần lượt bị sát hại. Cuối cùng “tôi” buộc phải tự mình phán đoán, điều tra để tìm ra chân tướng sự việc.`,
        images: [
            'images/anmangmuoimotchu.jpg',
            'images/lich_su_de_che_la_ma_page1.jpg',
            'images/lich_su_de_che_la_ma_page2.jpg'
        ],
        author: 'Higashino Keigo',
        price: '93.500',
        soluong: 10
    }, {
        productId: 7,
        name: 'Đất Rừng Phương Nam - Phiên Bản Điện Ảnh',
        category: 'vanhoc',
        description: `Được viết bằng trái tim nhạy cảm, tài quan sát tinh tế, hiểu biết sâu sắc và vốn sống dồi dào, Đất rừng phương Nam là một trong những tác phẩm viết về Nam bộ xuất sắc nhất, làm nổi bật trọn vẹn vẻ đẹp con người và thiên nhiên nơi đây. Mỗi lần đọc là mỗi lần tình yêu xứ sở được khơi gợi đến nao lòng…`,
        images: [
            'images/dat-rung-phuong-nam_ban-dien-anh_bia.jpg',
            'images/lich_su_trieu_dai_trung_hoa_page1.jpg',
            'images/lich_su_trieu_dai_trung_hoa_page2.jpg'
        ],
        author: 'Đoàn Giỏi',
        price: '126.000',
        soluong: 10
    },
    {
        productId: 8,
        name: 'Thần Thoại Hy Lạp - Bìa Cứng (Tái Bản 2023)',
        category: 'vanhoc',
        description: `Thần thoại Hy Lạp, một di sản văn hóa nhân loại, từ lâu đã trở thành nền tảng văn hóa không chỉ của một quốc gia mà còn là của cả một châu lục - Âu châu.

        Thần thoại Hy Lạp là những câu chuyện lý giải sự hình thành thế giới nhưng lấp lánh bên trong đó là khát khao, là ước mơ khẳng định tầm vóc của con người trước thiên nhiên. Những ước mơ ấy của loài người càng lấp lánh bao nhiêu thì bầu trời đêm thần thoại lại càng huyền bí, càng rộng mở bấy nhiêu.
        
        Đó chính là sức hấp dẫn ngàn đời của Thần thoại Hy Lạp.`,
        images: [
            'images/than_thoai_hy_lap.jpg',
            'images/lich_su_cach_mang_phap_page1.jpg',
            'images/lich_su_cach_mang_phap_page2.jpg'
        ],
        author: 'Nguyễn Văn Khỏa',
        price: '265.500',
        soluong: 10
    },
    {
        productId: 9,
        name: 'Nghĩ Giàu & Làm Giàu (Tái Bản 2020)',
        category: 'kinhte',
        description:
        `Think and Grow Rich - Nghĩ giàu và làm giàu là cuốn sách đầu tiên đưa ra triết lý thành đạt - một triết lý đầy đủ và toàn diện về thành công của cá nhân, đồng thời cung cấp cho bạn phương pháp để tạo một ý thức thành công cũng như đưa ra kế hoạch sơ bộ và chi tiết để đạt được thành công đó. Các bí quyết thành công được đề cập đến trong cuốn sách này có thể được đúc kết ngắn gọn: tất cả bắt nguồn từ cách nghĩ.`,
        images: [
            'images/nghigiaulamgiau_110k-01_bia-1.jpg',
            'images/naruto_cuoc_hanh_trinh_page1.jpg',
            'images/naruto_cuoc_hanh_trinh_page2.jpg'
        ],
        author: 'Napoleon Hill',
        price: '88.000',
        soluong: 10
    },
    {
        productId: 10,
        name: 'AI Chứ Không Phải Thế Nào?',
        category: 'kinhte',
        description:
         `Cuốn sách này sẽ dạy bạn cách thực hiện sự thay đổi mô hình thiết yếu này để bạn có thể:

        - Xây dựng 1 doanh nghiệp thành công một cách hiệu quả trong khi không giết chết chính mình
        
        - Không bao giờ bị giới hạn mục tiêu và tham vọng của bạn một lần nữa
        
        - Mở rộng sự giàu có , đổi mới , các mối quan hệ và niềm vui của bạn`,
        images: [
            'images/ai_chu_khong_phai_the_nao.jpg',
            'images/my_hero_academia_hoc_vien_sieu_anh_hung_page1.jpg',
            'images/my_hero_academia_hoc_vien_sieu_anh_hung_page2.jpg'
        ],
        author: 'Dan Sullivan',
        price: '227.800',
        soluong: 10
    },
    {
        productId: 11,
        name: 'Giải Mã Hành Vi - DISC: Bạn Thuộc Kiểu Lãnh Đạo Nào Trong 8 Nhóm Hành Vi? (Tái Bản 2023)',
        category: 'kinhte',
        description: 
        `DISC giúp thấu hiểu bản thân, thấu hiểu con người, thấu hiểu người khác, từ đó hiểu rõ bản thân hơn, phân loại được tính cách con người, nâng cao khả năng lãnh đạo, bán hàng thành công, dạy bán hàng thành công cho người khác. Cuốn sách Giải Mã Hành Vi DISC: Bạn Thuộc Kiểu Lãnh Đạo Nào Trong 8 Nhóm Hành Vi chính là chìa khóa để bạn hiểu rõ hơn về con người mình.`,
        images: [
            'images/giai-ma-hanh-vi-disc.jpg',
            'images/naruto_cuoc_hanh_trinh_page1.jpg',
            'images/naruto_cuoc_hanh_trinh_page2.jpg'
        ],
        author: 'Jeffrey Sugerman',
        price: '99.160',
        soluong: 10

    },
    {
        productId: 12,
        name: 'Kiếm Tiền Với Chat GPT',
        category: 'kinhte',
        description:
        `Thời điểm mà ở ngoài kia nhiều người vẫn còn đang mù mờ về ChatGPT và còn đang loay hoay chưa biết tạo tài khoản thế nào thì bạn đã có cơ hội tìm hiểu thật kỹ về nó, việc đang cầm trên tay cuốn sách này chính là minh chứng cho việc bạn đã nắm rõ và cờ đã đến tay bạn, phất hay không là do bạn thôi.`,
        images: [
            'images/kiem_tien_voi_chatGPT.jpg',
            'images/naruto_cuoc_hanh_trinh_page1.jpg',
            'images/naruto_cuoc_hanh_trinh_page2.jpg'
        ],
        author: 'Henry Mentor',
        price: '108.000',
        soluong: 10
    },
    {
        productId: 13,
        name: 'Thay Đổi Cuộc Sống Với Nhân Số Học',
        category: 'tamlykynangsong',
        description:
        `Cuốn sách Thay đổi cuộc sống với Nhân số học là tác phẩm được chị Lê Đỗ Quỳnh Hương phát triển từ tác phẩm gốc “The Complete Book of Numerology” của tiến sỹ David A. Phillips, khiến bộ môn Nhân số học khởi nguồn từ nhà toán học Pythagoras trở nên gần gũi, dễ hiểu hơn với độc giả Việt Nam.
        Cuốn sách “Thay đổi cuộc sống với Nhân số học”mang lại đầy đủ những kiến thức quan trọng nhất mà người hứng thú với Nhân số học cần tìm hiểu. Sách bao gồm các kiến thức về ba thể trong một con người, con số chủ đạo, biểu đồ ngày sinh, các mũi tên chỉ đặc điểm, con số ngày sinh, chu kỳ 9 năm, ba giai đoạn và bốn đỉnh cao của đời người cùng ý nghĩa, sức mạnh của cái tên của mỗi người. Các kiến thức này được diễn giải, phân tích và đi kèm các ví dụ cụ thể.`,
        images: [
            'images/tdcsvnsh.jpg',
            'images/naruto_cuoc_hanh_trinh_page1.jpg',
            'images/naruto_cuoc_hanh_trinh_page2.jpg'
        ],
        author: 'Lê Đỗ Quỳnh Hương',
        price: '173.600',
        soluong: 10
    },
    {
        productId: 14,
        name: 'Đắc Nhân Tâm (Tái Bản 2021)',
        category: 'tamlykynangsong',
        description:
        `Nhờ có tầm hiểu biết rộng rãi và khả năng 'ứng xử một cách nghệ thuật trong giao  tiếp' - Dale Carnegie đã viết ra một quyển sách với góc nhìn độc đáo và mới mẻ trong giao tiếp hàng ngày một cách vô cùng thú vị – Thông qua những mẫu truyện rời rạc nhưng lại đầy lý lẽ thuyết phục. Từ đó tìm ra những kinh nghiệm để đúc kết ra những nguyên tắc vô cùng ‘ngược ngạo’, nhưng cũng rất logic dưới cái nhìn vừa sâu sắc, vừa thực tế.
        Hơn thế nữa, Đắc Nhân Tâm còn đưa ra những nghịch lý mà từ lâu con người ta đã hiểu lầm về phương hướng giao tiếp trong mạng lưới xã hội, thì ra, người giao tiếp thông minh không phải là người có thể phát biểu ra những lời hay nhất, mà là những người học được cách mỉm cười, luôn biết cách lắng nghe, và khích lệ câu chuyện của người khác.`,
        images: [
            'images/dntttttuntitled.jpg',
            'images/naruto_cuoc_hanh_trinh_page1.jpg',
            'images/naruto_cuoc_hanh_trinh_page2.jpg'
        ],
        author: 'Dale Carnegie',
        price: '60.200',
        soluong: 10
    },
    {
        productId: 15,
        name: 'Nóng Giận Là Bản Năng, Tĩnh Lặng Là Bản Lĩnh (Tái Bản 2020)',
        category: 'tamlykynangsong',
        description:
        `“Nóng giận là bản năng, tĩnh lặng là bản lĩnh” là từ bỏ “tam độc”, tu dưỡng một trái tim trong sáng:

        - Từ bỏ “tham” – bớt một phần ham muốn, thêm một phần tự do.
        
        - Từ bỏ “sân” – bớt một phần tranh chấp, thêm một phần ung dung.
        
        - Từ bỏ “si” – bớt một phần mê muội, thêm một phần tĩnh tâm.
        
        Cuốn sách là tập hợp những bài học, lời tâm sự về nhân sinh, luận về cuộc đời của đại sư Hoằng Nhất – vị tài tử buông mọi trần tục để quy y cửa Phật, người được mệnh danh tinh thông kim cổ và cũng có tầm ảnh hưởng lớn trong Phật giáo.`,
        images: [
            'images/nong-gian-la-ban-nang-1_1.jpg',
            'images/naruto_cuoc_hanh_trinh_page1.jpg',
            'images/naruto_cuoc_hanh_trinh_page2.jpg'
        ],
        author: 'Tống Mặc',
        price: '62.300',
        soluong: 10
    },
    {
        productId: 16,
        name: 'Nuôi Con Không Phải Là Cuộc Chiến 2 - E.A.S.Y - Nếp Sinh Hoạt Cho Bé Yêu (Tái Bản 2021)',
        category: 'nuoidaycon',
        description:
        `Ở phần 2 của bộ sách này, nhóm tác giả mời đọc giả cùng tìm hiểu về khái niệm E.A.S.Y và lý do vì sao nó lại thành công đến vậy; cách áp dụng E.A.S.Y cho từng lứa tuổi; những lịch sinh hoạt mẫu và những khúc mắc trong áp dụng E.A.S.Y khi con trải qua các giai đoạn phát triển thể chất và tinh thần.

        Chúng tôi cũng ghi nhận lại những trường hợp kinh điển và những kinh nghiệm quý báu của các bậc cha mẹ đi trước truyền lại hay những giải pháp tổ chức cuộc sống khoa học khi mẹ quay trở lại đi làm… Xuyên suốt cuốn sách này, với mong muốn nhấn mạnh đến tính chất duy nhất và đặc biệt của từng em bé, chúng tôi cũng không quên đưa ra những giải pháp đặc biệt để cha mẹ có thể tự thiết kế lịch sinh hoạt phù hợp với con và với điều kiện của từng gia đình.`,
        images: [
            'images/nuoi_con_khong_phai_la_cuoc_chien.jpg',
            'images/lich_su_cach_mang_phap_page1.jpg',
            'images/lich_su_cach_mang_phap_page2.jpg'
        ],
        author: 'Hachun Lyonnet, Hương Đỗ',
        price: '103.200',
        soluong: 10
    },
    {
        productId: 17,
        name: '90% Trẻ Thông Minh Nhờ Cách Trò Chuyện Đúng Đắn Của Cha Mẹ (Tái Bản 2019)',
        category: 'nuoidaycon',
        description:
        `Trong cuốn sách này, chúng tôi sẽ giới thiệu tới quý vị phụ huynh những câu nói “có phép lạ” khiến các con trở thành những đứa trẻ “tự có ý thức” mà cha mẹ không cần cằn nhằn nhiều. Hơn nữa, đây hoàn toàn là những câu chúng ta có thể áp dụng ngay từ ngày hôm nay như “Mẹ luôn đứng về phía con!”, “Mẹ con mình cùng làm nhé!”…

        Về bản chất, mỗi đứa trẻ đều mang trong mình một “sức mạnh” tuyệt vời. Nhưng trước hết, chúng ta phải tin tưởng vào sức mạnh ấy đã! Khi được tin cậy, “sức mạnh” bên trong trẻ sẽ được nuôi dưỡng một cách tự nhiên.
        
        Cuốn sách này sẽ giới thiệu cách trò chuyện giúp khai phá sức mạnh ấy từ nhiều góc độ. Chắc chắn không chỉ các con mà ngay cả chính các bậc phụ huynh cũng sẽ thay đổi. Cuộc sống sẽ lại một lần nữa trở nên thật tuyệt vời.`,
        images: [
            'images/ttmnctcddccm.jpg',
            'images/lich_su_cach_mang_phap_page1.jpg',
            'images/lich_su_cach_mang_phap_page2.jpg'
        ],
        author: 'Urako Kanamori',
        price: '35.100',
        soluong: 10
    },
    {
        productId: 18,
        name: 'Hiểu Biết Của Mẹ, Sức Khỏe Của Con',
        category: 'nuoidaycon',
        description:
        `Trong cuốn sách này, tác giả sẽ chỉ dẫn cách dùng thuốc chính xác nhất. Từ đó giúp các bậc phụ huynh tự tin hơn trong việc phòng ngừa, chăm sóc và điều trị những bệnh thường gặp ở con trẻ. Cuốn sách bao gồm:

        *Lựa chọn kháng sinh
        
        *Thuốc thường dùng để điều trị viêm mũi dị ứng
        
        * Điều trị và dùng thuốc đối với viêm thanh quản cấp tính
        
        *Làm thế nào để phòng tránh rủi ro khi truyền dịch
        
        *Những vấn đề liên quan đến Vitamin D
        
        *10 điều cần lưu ý cho trẻ dùng thuốc an toàn.`,
        images: [
            'images/hieu-biet-cua-me-suc-khoe-cua-con.jpg',
            'images/lich_su_cach_mang_phap_page1.jpg',
            'images/lich_su_cach_mang_phap_page2.jpg'
        ],
        author: 'Ký Liên Mai',
        price: '126.650',
        soluong: 10
    },
    {
        productId: 19,
        name: '100 Kỹ Năng Sinh Tồn',
        category: 'thieunhi',
        description:
        `Rõ ràng, chi tiết và được trình bày dễ hiểu, cuốn sách này phác thảo chi tiết nhiều chiến lược giúp bảo vệ bạn và những người bạn yêu thương, dạy bạn cách suy nghĩ và hành động như một thành viên của lực lượng quân đội tinh nhuệ Hoa Kỳ. 100 kỹ năng sinh tồn thực sự là cuốn cẩm nang vô giá. Bởi lẽ, khi nguy hiểm xảy ra, bạn chẳng có nhiều thời gian cho những chỉ dẫn phức tạp đâu.`,
        images: [
            'images/100-cach-sinh-ton.jpg',
            'images/lich_su_cach_mang_phap_page1.jpg',
            'images/lich_su_cach_mang_phap_page2.jpg'
        ],
        author: 'Clint Emerson',
        price: '69.300',
        soluong: 10
    },
    {
        productId: 20,
        name: `Hoàng Tử Bé (Song Ngữ Việt-Anh)`,
        category: 'thieunhi',
        description:
        `Câu chuyện ngắn gọn về cuộc gặp gỡ diệu kỳ giữa viên phi công bị rơi máy bay và Hoàng tử bé giữa sa mạc Sa-ha-ra hoang vu. Hành tinh quê hương và các mối quan hệ của hoàng tử bé dần hé lộ: Tình bạn, tình yêu thương của Hoàng tử bé dành cho bông hồng duy nhất, tình cảm sâu sắc dành cho chú cáo.
        
        Không những vậy, thông qua các cuộc gặp gỡ trong chuyến du ngoạn tới các hành tinh khác nhau của hoàng tử bé cũng chứa đựng triết lý nhân sinh sâu sắc về các kiểu người trong xã hội hiện đại.`,
        images: [
            'images/hoang-tu-be.jpg',
            'images/lich_su_cach_mang_phap_page1.jpg',
            'images/lich_su_cach_mang_phap_page2.jpg'
        ],
        author: 'Antoine de Saint-Exupéry',
        price: '55.300',
        soluong: 10
    },
    {
        productId: 21,
        name: '10 Vạn Câu Hỏi Vì Sao - Các Hiện Tượng Tự Nhiên Kỳ Thú (Tái Bản 2018)',
        category: 'thieunhi',
        description:
        `Bộ sách “Mười Vạn Câu Hỏi Vì Sao” được các tác giả sưu tầm và biên tập từ rất nhiều câu hỏi “Tại sao”, "Vì sao" của trẻ. Qua quá trình chọn lọc cẩn thận, chu đáo, các tác giả đã tổng kết được những nội dung hết sức hấp dẫn, mới mẻ và khoa học.`,
        images: [
            'images/10-van-cau-hoi-vi-sao.jpg',
            'images/lich_su_cach_mang_phap_page1.jpg',
            'images/lich_su_cach_mang_phap_page2.jpg'
        ],
        author: 'Tôn Nguyên Vĩ',
        price: '39.600',
        soluong: 10
    },
    {
        productId: 22,
        name: 'Không Được Chạm Vào Vùng Riêng Tư Của Tớ',
        category: 'thieunhi',
        description:
        `Trong xã hội ngày nay, việc trang bị cho trẻ em những kiến thức an toàn để tự bảo vệ bản thân là điều hết sức cần thiết. Thấu hiểu điều này, bộ sách Giáo dục đầu đời cho trẻ - Những bài học tự bảo vệ bản thân đã ra đời nhằm giúp các em nhận thức rõ về cơ thể mình, bồi dưỡng những quan niệm đúng đắn về giới tính, đồng thời nắm được những nguy cơ tiềm tàng trong cuộc sống, tránh xa mọi hiểm nguy.`,
        images: [
            'images/khong-duoc-cham-vao-vung-rieng-tu-cua-to.jpg',
            'images/lich_su_cach_mang_phap_page1.jpg',
            'images/lich_su_cach_mang_phap_page2.jpg'
        ],
        author: 'Hồ Tâm',
        price: '29.400',
        soluong: 10
    },
    {
        productId: 23,
        name: 'Homo Deus - Lược Sử Tương Lai',
        category: 'lichsu',
        description:
        `Với giọng kể cuốn hút và mới lạ, Harari sẽ dần gợi mở và trả lời những câu hỏi trê, nhờ phân tích chi tiết những luận điểm gây nhiều tranh cãi: chủ nghĩa nhân đạo là một dạng tôn giáo, thứ tôn giáo tôn thờ con người thay vì thần thánh; sinh vật là thuật toán… ông vẽ ra một viễn cảnh tương lai khi Sapiens thất thế và Dữ liệu giáo trở thành một hình mẫu. HOMO DEUS còn bàn sâu hơn về các năng lực mà con người đã tự trang bị để sinh tồn và tiến hoá thành một giống loài ngự trị trên trái đất, để rồi chính trong tiến trình hoàn thiện và nâng cấp các năng lực ấy chúng ta sẽ bị truất quyền kiểm soát bởi một sinh vật mới, mang tên Homo Deus.`,
        images: [
            'images/homo-deus.jpg',
            'images/lich_su_cach_mang_phap_page1.jpg',
            'images/lich_su_cach_mang_phap_page2.jpg'
        ],
        author: 'Yuval Noah Harari',
        price: '151.200',
        soluong: 10
    },
    {
        productId: 24,
        name: 'Theo Dấu Chân Bác Hồ',
        category: 'lichsu',
        description:
        `Cuốn sách “Theo dấu chân Bác Hồ” tuyển chọn một số bài viết của Tiến sĩ Phan Văn Hoàng về Chủ tịch Hồ Chí Minh. Bằng nguồn tài liệu phong phú từ nhiều phía, bằng lập luận khoa học rõ ràng, chắc chắn, ông đã phản bác một cách thuyết phục luận điểm của Tiến sĩ Lê Hữu Mục cho rằng “Nhật ký trong tù” không phải tác phẩm của Hồ Chủ tịch; góp phần làm rõ vì sao trong những năm 1942 – 1944, Bác đã “thành công trong việc thay đổi địa vị của mình từ một người tù trở thành một đồng minh” và được trả tự do. Những bài viết trong cuốn sách cũng góp phần phác họa chân dung của Hồ Chủ tịch – một lãnh tụ cách mạng luôn lấy “độc lập cho Tổ quốc tôi, tự do cho đồng bào tôi” là mục đích tối thượng; luôn mang trong mình lòng tự hào, tự tôn dân tộc; khiến những người ở bên kia chiến tuyến nể phục và kính trọng. Cuốn sách cũng giúp bạn đọc hiểu rõ hơn về nơi Bác Hồ đã xuống tàu để ra đi tìm đường cứu nước; về những mốc thời gian mà Sài Gòn – Gia Định mang tên lãnh tụ Hồ Chí Minh…`,
        images: [
            'images/theo-dau-chan-bac-ho.jpg',
            'images/lich_su_cach_mang_phap_page1.jpg',
            'images/lich_su_cach_mang_phap_page2.jpg'
        ],
        author: 'TS Phan Văn Hoàng',
        price: '55.250',
        soluong: 10
    },
    {
        productId: 25,
        name: 'Lịch Sử Việt Nam Bằng Tranh - Nguyễn Trãi (Bản Màu) (Tái Bản 2023)',
        category: 'lichsu',
        description:
        `Bộ sách Lịch sử Việt Nam bằng tranh kể chuyện lịch sử Việt Nam bằng một phong cách ngắn gọn, hấp dẫn và có hệ thống qua những câu chuyện và những bức tranh đẹp. Phiên bản mới này được tô màu rất công phu. Sách được chăm chút khâu thiết kế, với ruột và bìa đẹp, vừa hiện đại vừa đậm bản sắc Việt.`,
        images: [
            'images/nguyentrai.jpg',
            'images/lich_su_cach_mang_phap_page1.jpg',
            'images/lich_su_cach_mang_phap_page2.jpg'
        ],
        author: 'Trần Bạch Đằng, Lê Văn Năm, Nguyễn Huy Khôi, Nguyễn Thùy Linh',
        price: '55.250',
        soluong: 10
    },
    {
        productId: 26,
        name: 'Lịch Sử Việt Nam Bằng Tranh: Nước Âu Lạc - Bìa Cứng',
        category: 'lichsu',
        description:
        `Hùng Vương thứ 18 mải mê tửu sắc, chẳng màng việc nước đã làm cho Văn Lang hùng mạnh năm nào bước vào suy vong. An Dương Vương lên ngôi, hòa hợp hai bộ tộc Lạc Việt và Âu Việt, lập nên nước Âu Lạc.`,
        images: [
            'images/nuoc-au-lac.jpg',
            'images/lich_su_cach_mang_phap_page1.jpg',
            'images/lich_su_cach_mang_phap_page2.jpg'
        ],
        author: 'Nguyễn Trung Tín, TRẦN YÊN THẾ (NGUYỄN ĐỨC HÒA), Tôn Nữ Quỳnh Trân, NGUYỄN THÙY LINH, Trần Bạch Đằng, Phan An',
        price: '148.500',
        soluong: 10
    },
    {
        productId: 27,
        name: 'Giáo Trình Xã Hội Học Đại Cương',
        category: 'giaotrinh',
        description:
        `Trong chương trình đào tạo các ngành có trình độ đại học, học phần Xã hội học đại cương là học phần của khối kiến thức khoa học xã hội thuộc nội dung kiến thức giáo dục đại cương. Học phần này cung cấp cho người học những kiến thức cơ bản và có hệ thống về tri thức xã hội học, bao gồm: khái quát về khoa học xã hội học; phương pháp nghiên cứu xã hội học; một số chủ đề nghiên cứu của xã hội học như là: cơ cấu xã hội; hành động xã hội và tương tác xã hội; cá nhân và xã hội; bất bình đẳng và phân tầng xã hội; sự điều tiết của xã hội; chuyển biến xã hội,… `,
        images: [
            'images/xa-hoi-hoc.jpg',
            'images/lich_su_cach_mang_phap_page1.jpg',
            'images/lich_su_cach_mang_phap_page2.jpg'
        ],
        author: 'TS Trương Thị Hiền',
        price: '76.500',
        soluong: 10
    },
    {
        productId: 28,
        name: '500 Bài Tập Vật Lí Trung Học Cơ Sở',
        category: 'giaotrinh',
        description:
        ``,
        images: [
            'images/500-bt-vat-li.jpg',
            'images/lich_su_cach_mang_phap_page1.jpg',
            'images/lich_su_cach_mang_phap_page2.jpg'
        ],
        author: 'ThS Phan Hoàng Văn',
        price: '123.250',
        soluong: 10
    },
    {
        productId: 29,
        name: 'Giáo Trình Chuẩn HSK 1 (Tái Bản 2022)',
        category: 'ngoaingu',
        description:
        `Kết hợp thi cử và giảng dạy: Được biên soạn phù hợp với nội dung, hình thức cũng như các cấp độ của đề thi HSK thật, bộ sách này có thể được sử dụng đồng thời cho cả hai mục đích là giảng dạy tiếng Trung Quốc và luyện thi HSK. • Bố cục chặt chẽ và khoa học: Các điểm ngữ pháp được giải thích cặn kẽ, phần ngữ âm và chữ Hán được trình bày từ đơn giản đến phức tạp theo từng cấp độ.

        Đề tài quen thuộc, nhiều tình huống thực tế: Bài học được thiết kế không quá dài và đề cập đến nhiều tình huống (có file MP3 kèm theo), giúp bạn rèn luyện các kỹ năng ngôn ngữ và tránh cảm giác căng thẳng trong lúc học. • Cách viết thú vị: Bằng cách viết sinh động kèm nhiều hình ảnh minh họa, tác giả bộ sách chỉ cho bạn thấy học tiếng Trung Quốc không hề khô khan, nhàm chán.`,
        images: [
            'images/hsk1.jpg',
            'images/lich_su_cach_mang_phap_page1.jpg',
            'images/lich_su_cach_mang_phap_page2.jpg'
        ],
        author: 'Khương lệ Bình',
        price: '148.500',
        soluong: 10
    },
    {
        productId: 30,
        name: 'Giải Thích Ngữ Pháp Tiếng Anh (Tái Bản 2022)',
        category: 'ngoaingu',
        description:
        `Ngữ pháp Tiếng Anh tổng hợp các chủ điểm ngữ pháp trọng yếu mà học sinh cần nắm vững. Các chủ điểm ngữ pháp được trình bày rõ ràng, chi tiết. Sau mỗi chủ điểm ngữ pháp là phần bài tập & đáp án nhằm giúp các em củng cố kiến thức đã học, đồng thời tự kiểm tra kết quả.`,
        images: [
            'images/giai-thich-ngu-phap-tieng-anh.jpg',
            'images/lich_su_cach_mang_phap_page1.jpg',
            'images/lich_su_cach_mang_phap_page2.jpg'
        ],
        author: 'Mai Lan Hương, Hà Thanh Uyên',
        price: '154.000',
        soluong: 10
    },
    {
        productId: 31,
        name: 'Tự Học 2000 Từ Vựng Tiếng Anh Theo Chủ Đề (Tái Bản)',
        category: 'ngoaingu',
        description:
        `Các bạn đang băn khoăn chưa biết nên học từ vựng như thế nào để có thể ghi nhớ được nhiều từ và lâu nhất. Dưới đây là những phương pháp học mà các bạn có thể áp dụng để học từ vựng hiệu quả nhất.
        1. Học từ vựng theo chủ đề
        2. Sử dụng hình ảnh, âm thanh hay câu chuyện để ghi nhớ từ vựng nhanh
        3. Học từ vựng qua bài hát, phim ảnh
        4. Luôn có một cuốn sổ tay ghi từ mới
        5. Tập sử dụng các từ mới và ôn tập thường xuyên`,
        images: [
            'images/tu-hoc-2000-tu-vung-tieng-anh.jpg',
            'images/lich_su_cach_mang_phap_page1.jpg',
            'images/lich_su_cach_mang_phap_page2.jpg'
        ],
        author: 'The Windy',
        price: '43.550',
        soluong: 10
    },
    {
        productId: 32,
        name: 'Cambridge IELTS 18 Academic - With Answer + Audio',
        category: 'ngoaingu',
        description:
        `Bộ sách IELTS được thiết kế chuẩn theo cấu trúc bài thi thực tế, sử dụng được cho cả hai hình thức thi là IELTS General và Academic

        Cấu trúc của mỗi quyển sách có chứa 4 bài test cơ bản theo chuẩn format đề thật, và độ khó tăng dần theo từng cấp độ.
        
        Vào mỗi phần cuối của sách có đáp án chi tiết, kèm theo đó là audio scrips của từng đề, giúp cho người học có thể kiểm tra lại đáp án của mình sau khi làm bài test.
        
        Là cuốn sách tất cả trong 1, giúp bạn học đầy đủ 4 kĩ năng: nghe – nói – đọc – viết.`,
        images: [
            'images/ielts.jpg',
            'images/lich_su_cach_mang_phap_page1.jpg',
            'images/lich_su_cach_mang_phap_page2.jpg'
        ],
        author: 'Nhiều Tác Giả',
        price: '161.000',
        soluong: 10
    },


];
localStorage.setItem("productArray",JSON.stringify(productArray));
var btnDeleteIt = document.querySelectorAll('.delete-it-product');
var BtnSua = document.querySelectorAll('.fixInfo-it-product');
///
var boxFixInfo = document.querySelector('.box-fixInfo-it');
var xBtn = document.querySelector('#x-exit');
var img1 = document.querySelector('#img1');
var img2 = document.querySelector('#img2');
var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');
var input3 = document.querySelector('#input3');
var saveAndExit = document.querySelector('#save-exit');
var urlimg;
var indeximg;
var indexid;
const list_element = document.querySelector('.list-product');
var pagination_element = document.querySelector('#pagination');
let current_page = 1;
let rows = 5;
function Displaylist(items,wrapper,rows_per_page,page){ /// 5* current_page -1;
localStorage.setItem("productArray",JSON.stringify(productArray));

    wrapper.innerHTML = "";
    page--;
    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginationItems = items.slice(start,end);
    let header_table = document.createElement('tr');
    header_table.innerHTML = `
          <td>${"productId"}</td>
          <td>${"images"}</td>
          <td>${"name"}</td>
          <td>${"category"}</td>
          <td>${"author"}</td>
          <td>${"price"}</td>
          <td>${"soluong"}</td>  
          <td>  </td>
        `;
        wrapper.appendChild(header_table)
    for(let i =0;i<paginationItems.length;i++){
        let row_element = document.createElement('tr');
        row_element.innerHTML = `
          <td>${paginationItems[i].productId}</td>
          <td><img src="${paginationItems[i].images[0]}"></td>
          <td>${paginationItems[i].name}</td>
          <td>${paginationItems[i].category}</td>
          <td>${paginationItems[i].author}</td>
          <td>${paginationItems[i].price + " VND"}</td>
          <td>${paginationItems[i].soluong}</td>
          <td>
            <button class="delete-it-product">X</button>
            <button class="fixInfo-it-product">Sửa</button>
          </td>
        `;
        wrapper.appendChild(row_element);
    }
    btnDeleteIt = document.querySelectorAll('.delete-it-product');
    BtnSua = document.querySelectorAll('.fixInfo-it-product');
    for (let i = 0; i<5; i++) {
        indexid = (current_page-1)*5+i; /// dax fix ngon lanh
     btnDeleteIt[i].addEventListener('click', createDeleteHandler(indexid));
     BtnSua[i].addEventListener('click',fiximg(indexid))
  }
}

function setupPagination(items,wrapper,rows_per_page){
    wrapper.innerHTML="";
    let page_count = Math.ceil(items.length / rows_per_page);
    for(let i =1;i<page_count+1;i++){
        let btn = PaginationButton(i,items);
        wrapper.appendChild(btn);
    }
}
function PaginationButton(page,items){
    let button = document.createElement('button');
    button.innerText=page;
    if(current_page == page){
        button.classList.add('active');
    } 
    button.addEventListener("click",()=>{
        current_page = page;
        Displaylist(items,list_element,rows,current_page);
        let current_btn = document.querySelector('.papenumber button.active');
        button.classList.add('active');
    })
    return button;
}
Displaylist(productArray,list_element,rows,current_page);

setupPagination(productArray,pagination_element,rows);
function createDeleteHandler(index) {
  return function () {
    productArray.splice(index,1);
    Displaylist(productArray,list_element,rows,current_page);
    setupPagination(productArray,pagination_element,rows);
  };
}
function fiximg(index){
    return function(){
        indexid = 
        boxFixInfo.style.display = "block";
        img1.src = productArray[index].images[0];
        input1.value = productArray[index].name;
        input2.value = productArray[index].price;
        indeximg = index;
    }
}

///JS- btn X

xBtn.addEventListener("click",()=>{
    boxFixInfo.style.display = "none"
})

input3.addEventListener('change', () => {
    const file = input3.files[0];
    if (file && file.type.includes('image')) {          
          urlimg = URL.createObjectURL(file);
         img2.src = URL.createObjectURL(file);
    } else {
        showAlert('Chỉ chấp nhận tệp hình ảnh');
    }
})
// JS-Save and exit
saveAndExit.addEventListener("click",()=>{
    productArray[indeximg].images[0] = urlimg;
    console.log(indeximg);
    productArray[indeximg].name = input1.value;
    productArray[indeximg].price = input2.value;
    boxFixInfo.style.display = "none";
    Displaylist(productArray,list_element,rows,current_page);
    
})
//  JS cho Them SP.
// 
let addNameProduct = document.querySelector('#add-name-product');
let addPriceProduct = document.querySelector('#add-price-product');
let addnumProduct = document.querySelector('#add-num-product');
let addTheLoai = document.querySelector('#add-theloai');
let addImgProduct = document.querySelector("#add-file-product");
let addBtn = document.querySelector('#btn-add-file-img');

let newProduct = {
    productId: 33,
    name: 'Vầng Trăng Máu',
    category: 'vanhoc',
    description: ``,
    images:['images/vangtrangmau.jpg'],
    author: 'David Grann',
    price: '120.000',
    soluong: 10
}
addImgProduct.addEventListener('change',()=>{
    const file = addImgProduct.files[0];
    if (file && file.type.includes('image')) {
        urlimg = URL.createObjectURL(file);
        document.querySelector('#add-display-img').src = URL.createObjectURL(file);
    }
})
addBtn.addEventListener('click',()=>{
    if(addNameProduct.value ===''||addPriceProduct.value==''||addTheLoai.value==''||addnumProduct.value==''){
        alert("Vui lòng nhập đầy đủ:") // fix loi bi trung mang
    }
    else{
    newProduct.name = addNameProduct.value;
    newProduct.price = addPriceProduct.value;
    newProduct.category = addTheLoai.value;
    //console.log(newProduct.category)
    newProduct.soluong = Number(addnumProduct.value);
    newProduct.images = urlimg;
    productArray.push(newProduct);
    //console.log(productArray);
    Displaylist(productArray,list_element,rows,current_page);
    setupPagination(productArray,pagination_element,rows);
    }
})
//  JS-Sử lý đơn hàng
let arr_receipt = JSON.parse(localStorage.getItem("cart")); // Mảng đơn hàng
let table_receipt = document.querySelector('#table-get-receipt');

function donhang() {
  let tong = 0;
   let row_receipt ;
   row_receipt = document.createElement('tr');
   row_receipt.innerHTML =`
      <td>${"Name"}</td>
      <td>${"Prices"}</td>
      <td>${"Num"}</td>
      <td>${"Amount"}</td>
    `;
   table_receipt.appendChild(row_receipt);
  for (let i = 0; i < arr_receipt.length; i++) {
     row_receipt = document.createElement('tr');
    row_receipt.innerHTML =`
      <td>${arr_receipt[i].name}</td>
      <td>${arr_receipt[i].cash+" vnd"}</td>
      <td>${arr_receipt[i].quantity}</td>
      <td>${arr_receipt[i].total+" vnd"}</td>
    `;
    table_receipt.appendChild(row_receipt);
    tong += arr_receipt[i].total;
  }

   row_receipt = document.createElement('tr');
  row_receipt.innerHTML = `
    <td colspan="4">General: ${parseInt(tong)+" vnd"}</td>
  `;
  table_receipt.appendChild(row_receipt);

  let statusRow = document.createElement('tr');
  statusRow.innerHTML = `
    <td colspan="4">
      <span>Trạng thái xác nhận đơn hàng</span>
      <button id="status-receipt">Chưa</button>
    </td>
  `;
  table_receipt.appendChild(statusRow);

  //arr_receipt[0].status = 0; // Cập nhật trạng thái đơn hàng

  let btn_status_receipt = document.querySelector('#status-receipt');
  btn_status_receipt.addEventListener('click', () => {
    if(arr_receipt[0].status = -1){
        arr_receipt[0].status = 1; // Thay đổi trạng thái đơn hàng khi nhấn nút
        localStorage.setItem("cart",JSON.stringify(arr_receipt))
        btn_status_receipt.innerHTML = "Da xac nhan"

    }
  });
}
let store_recript = [];
window.addEventListener('storage',(e)=>{
    if(e.key='cart'){
        arr_receipt = JSON.parse(localStorage.getItem("cart"));
        if (arr_receipt[0].status == -1) {
            table_receipt.innerHTML = '';
            donhang();
          } else {
            table_receipt.innerHTML = "<h3>Không có đơn hàng</h3>";
          }

    }
})

// JS cho Menu-bar-admin
let menu1 = document.querySelector('.menu-1');
let menu2 = document.querySelector('.menu-2');
let menu3 = document.querySelector('.menu-3');
let menuTable = document.querySelector('.parent-content-admin-q');
let receipt = document.querySelector('.parent-get-receipt');
let userAccount = document.querySelector('.parent-get-user-account');
menu1.addEventListener("click",()=>{
    menuTable.style.display = 'block';
    receipt.style.display = 'none';
    userAccount.style.display = 'none';
});
menu2.addEventListener("click",()=>{
    menuTable.style.display = 'none';
    receipt.style.display = 'block';
    userAccount.style.display = 'none';
   
});
menu3.addEventListener("click",()=>{
    menuTable.style.display = 'none';
    receipt.style.display = 'none';
    userAccount.style.display = 'block';
});

// js cho account user

const accountInfo = [
    { account: "user1", pass: "11111111", gmail: 'user1@example.com', status: 1 },
    { account: "user2", pass: "22222222", gmail: "user2@example.com", status: 1 },
    { account: "user3", pass: "33333333", gmail: "user3@example.com", status: 1 },
    { account: "user4", pass: "44444444", gmail: "user4@example.com", status: 0 },
    { account: "user5", pass: "55555555", gmail: "user5@example.com", status: 0 },
    { account: "user6", pass: "66666666", gmail: "user6@example.com", status: 0 },
    { account: "user7", pass: "77777777", gmail: "user7@example.com", status: 0 },
    { account: "user8", pass: "88888888", gmail: "user8@example.com", status: 0 },
    { account: "user9", pass: "99999999", gmail: "user9@example.com", status: 0 },
    { account: "user10", pass: "10101010", gmail: "user10@example.com", status: 0 }
];
localStorage.setItem('account',JSON.stringify(accountInfo));
let perPage = 5;
let currentPage = 1;
let start = 0;
let end = perPage;
const totalPages = Math.ceil(accountInfo.length / perPage);

const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-pre');

function changPage(currentPage) {
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
    console.log(start, end);
}

function createTable() {
    var table = '';
    table = '<table class="table table-striped table-hover">';
    table += '<thead>';
    table += '<tr>';
    table += '<th>STT</th>';
    table += '<th>Name</th>';
    table += '<th>Email</th>';
    table += '<th>Password</th>';
    table += '<th>Status</th>';
    table += '<th>Actions</th>';
    table += '</tr>';
    table += '</thead>';
    table += '<tbody>';

    const content = accountInfo.map((item, index) => {
        if (index >= start && index < end) {
            table += '<tr>';
            table += '<td>' + (index + 1) + '</td>';
            table += '<td>' + item.account + '</td>';
            table += '<td>' + item.gmail + '</td>';
            table += '<td>' + item.pass + '</td>';
            table += '<td class="statusCell">' + (item.status === 1 ? 'Đang hoạt động' : 'Đã khoá') + '</td>';
            table += '<td><a href="#" class="block" data-index="' + index + '">';
            table += '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-fill-lock" viewBox="0 0 16 16">';
            table += '<path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5v-1a1.9 1.9 0 0 1 .01-.2 4.49 4.49 0 0 1 1.534-3.693C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4m7 0a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1" />';
            table += '</svg></a></td>';
            table += '</tr>';
            return table;
        }
    });
    table += '<tbody>';
    table += '</table>';
    document.getElementById('tableContainer').innerHTML = table;

    // Thêm sự kiện click vào biểu tượng khoá sau khi tạo bảng
    addBlockEventListeners();
}

// Hàm thêm sự kiện click vào biểu tượng khoá
function addBlockEventListeners() {
    const blockButtons = document.querySelectorAll('.block');
    blockButtons.forEach((button) => {
        button.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            if (accountInfo[index].status === 0) {
                accountInfo[index].status = 1;
                createTable();
                localStorage.setItem('account',JSON.stringify(accountInfo));
            }
            else{
                accountInfo[index].status = 0;
                createTable();
                localStorage.setItem('account',JSON.stringify(accountInfo));
            }
        });
    });
}


createTable();
renderListPage();

function renderListPage() {
    let html = '';
    html += `<li class="active">${1}</li>`;
    for (let i = 2; i <= totalPages; i++) {
        html += `<li>${i}</li>`;
    }
    document.getElementById('number-page').innerHTML = html;
}
function changClick() {
    const currentPages = document.querySelectorAll('.number_page li');
    for (let i = 0; i < currentPages.length; i++) {
        currentPages[i].addEventListener("click", () => {
            let value = i + 1;
            console.log(value);
            currentPage = value;
            $('.number_page li').removeClass('active');
            currentPages[i].classList.add('active');
            if (currentPage > 1 && currentPage < totalPages) {
                $('.btn-pre').removeClass('btn-active');
                $('.btn-next').removeClass('btn-active');
            }
            if (currentPage === 1) {
                $('.btn-pre').addClass('btn-active');
            }
            if (currentPage === totalPages) {
                $('.btn-next').addClass('btn-active');
            }
            changPage(currentPage);
            createTable();
        })
    }
}
changClick();


btnNext.addEventListener("click", () => {
    currentPage++;
    if (currentPage > totalPages) {
        currentPage = totalPages;
    }
    if (currentPage === totalPages) {
        $('.btn-next').addClass('btn-active');
    }
    $('.btn-pre').removeClass('btn-active');
    $('.number_page li').removeClass('active');
    $(`.number_page li:eq(${currentPage - 1})`).addClass('active');
    changPage(currentPage);
    createTable();
});

btnPrev.addEventListener("click", () => {
    currentPage--;
    if (currentPage <= 1) {
        currentPage = 1;
    }
    if (currentPage === 1) {
        $('.btn-pre').addClass('btn-active');
    }
    $('.btn-next').removeClass('btn-active');
    $('.number_page li').removeClass('active');
    $(`.number_page li:eq(${currentPage - 1})`).addClass('active');
    changPage(currentPage);
    createTable();
});


