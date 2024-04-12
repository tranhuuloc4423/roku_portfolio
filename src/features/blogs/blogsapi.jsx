import img_0 from "../../assets/images/LTGTTB/introduce_0.png";
import img_1 from "../../assets/images/LTGTTB/bai1.png";
import img_2 from "../../assets/images/LTGTTB/bai2.png";
import img_3 from "../../assets/images/LTGTTB/bai3.png";

const blogs = [
  {
    id: 1,
    title: "Lập trình giao tiếp thiết bị",
    link: "/blogs/1",
    desc: "Môn lập trình giao tiếp thiết bị tập trung vào việc điều khiển và tương tác với các thiết bị ngoại vi và vi điều khiển nhúng. Chúng ta học cách viết mã để giao tiếp với cảm biến, bộ điều khiển và các thiết bị ngoại vi khác. Học về giao thức giao tiếp như I2C, SPI, UART và GPIO để truyền thông tin giữa vi điều khiển và thiết bị. Môn này cung cấp kiến thức và kỹ năng lập trình nhúng, giúp sinh viên phát triển ứng dụng nhúng, hệ thống tự động, IoT và các lĩnh vực công nghiệp khác.",
    thumbnail:
      "https://c8.alamy.com/comp/2MJ12XJ/robot-programming-control-automation-work-system-automated-process-vector-monocolor-illustration-2MJ12XJ.jpg",
    children: [
      {
        id: 0,
        title: "Tìm hiểu Wokwi",
        link: "/blogs/1/0",
        thumbnail: img_0,
        main_content: [
          {
            title: "# Giới thiệu",
            desc: (
              <ul className="h3 list-decimal">
                <li>
                  Wokwi là nền tảng trực tuyến cho mô phỏng và kiểm tra dự án
                  điện tử.
                </li>
                <li>
                  Bạn có thể xây dựng mạch điện tử, viết mã và mô phỏng chúng
                  trên Wokwi.
                </li>
                <li>
                  Nền tảng cung cấp công cụ mô phỏng trực quan và trình biên
                  dịch tích hợp.
                </li>
                <li>
                  Wokwi hữu ích cho sinh viên, nhà phát triển và kỹ sư điện tử.
                </li>
                <li>
                  Tính năng chia sẻ dự án cho phép làm việc nhóm và chia sẻ kiến
                  thức.
                </li>
                <li>
                  Giao diện thân thiện và dễ sử dụng giúp thực hiện thử nghiệm
                  và kiểm tra ứng dụng điện tử một cách nhanh chóng và hiệu quả.
                </li>
              </ul>
            ),
          },
          {
            title: "# Tại sao lại sử dụng Wokwi?",
            desc: (
              <div>
                <div className="h2">
                  ## Wokwi được sử dụng vì nhiều lợi ích sau đây:
                </div>
                <ul className="h3 list-decimal">
                  <li>
                    Mô phỏng và kiểm tra: Wokwi cho phép mô phỏng và kiểm tra
                    các dự án điện tử trước khi triển khai trên phần cứng thực
                    tế, giúp tiết kiệm thời gian và tiền bạc.
                  </li>
                  <li>
                    Trình biên dịch tích hợp: Wokwi tích hợp trình biên dịch
                    trực tuyến, cho phép viết và kiểm tra mã trực tiếp trên nền
                    tảng, tiết kiệm thời gian và công sức.
                  </li>
                  <li>
                    Giao diện dễ sử dụng và trực quan: Wokwi có giao diện người
                    dùng thân thiện và dễ sử dụng, giúp dễ dàng xây dựng và thử
                    nghiệm mạch điện tử.
                  </li>
                  <li>
                    Chia sẻ và làm việc nhóm: Wokwi cung cấp tính năng chia sẻ
                    dự án, giúp làm việc nhóm và chia sẻ kiến thức với nhau.
                  </li>
                  <li>
                    Tiện ích đa nền tảng: Wokwi có thể truy cập từ nhiều thiết
                    bị và hệ điều hành khác nhau, mang lại sự linh hoạt cho
                    người dùng.
                  </li>
                </ul>
              </div>
            ),
          },
          {
            title: "# Các chức năng chính",
            desc: (
              <div>
                <div className="h2">
                  ## Các chức năng chính trên Wokwi bao gồm:
                </div>
                <ul className="h3">
                  <li>
                    1. Mô phỏng mạch điện tử:
                    <br />- Wokwi cung cấp một môi trường trực tuyến cho phép
                    bạn xây dựng và mô phỏng mạch điện tử. Bạn có thể kéo và thả
                    linh kiện, kết nối chúng lại với nhau để tạo ra một mạch
                    hoàn chỉnh.
                  </li>

                  <li>
                    2. Trình biên dịch và kiểm tra mã:
                    <br />- Wokwi tích hợp một trình biên dịch trực tuyến cho
                    phép bạn viết mã cho vi điều khiển và linh kiện điện tử. Bạn
                    có thể kiểm tra mã của mình trực tiếp trên nền tảng Wokwi và
                    xem kết quả mô phỏng.
                  </li>

                  <li>
                    3. Giao diện người dùng trực quan:
                    <br />- Wokwi có giao diện người dùng thân thiện và dễ sử
                    dụng. Bạn có thể thao tác kéo và thả linh kiện, kết nối
                    chúng và điều chỉnh các thông số của mạch điện tử một cách
                    trực quan.
                  </li>

                  <li>
                    4. Chia sẻ dự án và làm việc nhóm:
                    <br />- Wokwi cho phép bạn chia sẻ dự án của mình với người
                    khác. Bạn có thể mời thành viên khác vào dự án của mình và
                    làm việc cùng nhau trên cùng một mạch điện tử.
                  </li>

                  <li>
                    5. Giao tiếp với phần cứng thực:
                    <br />- Wokwi hỗ trợ giao tiếp với phần cứng thực qua các
                    giao diện như UART, I2C và SPI. Bạn có thể kết nối mạch điện
                    tử trực tiếp với vi điều khiển Arduino hoặc các thiết bị
                    khác để thử nghiệm và kiểm tra ứng dụng của mình.
                  </li>

                  <li>
                    6. Thư viện linh kiện phong phú:
                    <br />- Wokwi cung cấp một thư viện linh kiện phong phú, cho
                    phép bạn sử dụng các linh kiện phổ biến như vi điều khiển,
                    cảm biến, màn hình và nhiều hơn nữa.
                  </li>
                </ul>
                <div className="h3">
                  - Tất cả những chức năng trên đều giúp bạn thực hiện thử
                  nghiệm, kiểm tra và phát triển ứng dụng điện tử một cách thuận
                  tiện và hiệu quả trên nền tảng Wokwi.
                </div>
              </div>
            ),
          },
        ],
      },
      {
        id: 1,
        title: "Giới thiệu môn học",
        link: "/blogs/1/1",
        thumbnail: img_1,
        main_content: [
          {
            title: "# Lập trình giao tiếp thiết bị?",
            desc: (
              <div className="h3">
                - Lập trình giao tiếp thiết bị - Lập trình nhúng (Embedded
                Programming, Embedded System) là một hệ thống nhỏ, độc lập, có
                khả năng xử lí thông tin tốt trong các hệ thống lớn và phức tạp.
                Hệ thống lập trình nhúng là một tổ hợp gồm phần cứng với phần
                mềm và thực hiện một chức năng chuyên biệt theo yêu cầu. Hệ
                thống nhúng ví dụ như các tính năng của xe ô tô, máy bán nước tự
                động...
              </div>
            ),
          },
          {
            title: "# Công cụ và thiết bị",
            desc: (
              <div>
                <div>
                  <div className="h2">## Công cụ phần mềm:</div>
                  <div className="h3">- Ngôn ngữ: C/C++, Python, Java ...</div>
                  <div className="h3">- IDE: Arduino IDE, VS Code ...</div>
                </div>
                <div>
                  <div className="h2">## Công cụ phần cứng:</div>
                  <div className="h3">
                    - Arduino, ESP8266/32, Sensor, Raspberry Pi, ...
                  </div>
                </div>
                <div>
                  <div className="h2">## Công cụ hỗ trợ học tập:</div>
                  <div className="h3">- Phần mềm giả lập - Wokwi</div>
                </div>
              </div>
            ),
          },
          {
            title: "# Quy trình dự án",
            desc: (
              <div className="h3">
                <ul>
                  <li>Bước 1: Chuẩn bị công cụ và dụng cụ theo yêu cầu</li>
                  <li>Bước 2: Vẽ sơ đồ kết nối</li>
                  <li>Bước 3: Kết nối thiết bị</li>
                  <li>Bước 4: Giải thuật, lập trình và biên dịch</li>
                  <li>Bước 5: Kiểm thử và nhận xét</li>
                </ul>
              </div>
            ),
          },
          {
            title: "# Câu hỏi",
            desc: (
              <div>
                <div>
                  <div className="h2">
                    ## Câu 1: Hãy liệt kê điều gì ảnh hưởng đến sự sáng tắt của
                    hệ thống?
                  </div>
                  <div className="h3">
                    - Quá trình sáng tắt của hệ thống trong lập trình giao tiếp
                    thiết bị có thể bị ảnh hưởng bởi nhiều yếu tố. Các yếu tố
                    ảnh hưởng bao gồm lỗi phần cứng, lỗi phần mềm, xung đột tín
                    hiệu, sai cấu hình, nguồn điện không ổn định, lỗi kết nối và
                    sự cố mạng. Để đảm bảo quá trình sáng tắt hệ thống hoạt động
                    ổn định, cần kiểm tra thiết bị, xử lý các lỗi phần mềm và
                    phần cứng, cấu hình chính xác, đảm bảo nguồn điện ổn định và
                    kiểm tra kết nối và mạng một cách đáng tin cậy.
                  </div>
                </div>
                <div>
                  <div className="h2">
                    ## Câu 2: Nếu bạn là lập trình viên hãy đánh giá ảnh hưởng
                    của nó?
                  </div>
                  <ul className="h3">
                    <li>
                      <div className="text-lg font-semibold">
                        1. Lỗi phần cứng:
                      </div>
                      - Lỗi phần cứng có thể gây ra sự cố nghiêm trọng trong quá
                      trình sáng tắt hệ thống. Điều này có thể làm gián đoạn
                      hoạt động chính xác của thiết bị và gây mất kết nối hoặc
                      lỗi dữ liệu. Đánh giá: ảnh hưởng lớn.
                    </li>

                    <li>
                      <div className="text-lg font-semibold">
                        2. Lỗi phần mềm:
                      </div>
                      - Lỗi phần mềm có thể gây ra các vấn đề như không xử lý
                      đúng tín hiệu sáng tắt, thời gian chờ không chính xác hoặc
                      lỗi trong mã lập trình. Điều này có thể dẫn đến sự cố
                      trong quá trình sáng tắt hệ thống. Đánh giá: ảnh hưởng
                      trung bình đến lớn.
                    </li>

                    <li>
                      <div className="text-lg font-semibold">
                        3. Xung đột tín hiệu:
                      </div>
                      - Xung đột tín hiệu có thể xảy ra khi có nhiều thiết bị
                      cùng gửi hoặc nhận tín hiệu cùng một lúc. Điều này có thể
                      làm mất tín hiệu hoặc gây ra sự cố trong quá trình sáng
                      tắt hệ thống. Đánh giá: ảnh hưởng trung bình.
                    </li>

                    <li>
                      <div className="text-lg font-semibold">
                        4. Sai cấu hình:
                      </div>
                      - Sai cấu hình giữa các thiết bị có thể gây ra sự cố trong
                      quá trình sáng tắt hệ thống. Điều này bao gồm thiết lập
                      không chính xác của tham số và các thông số không tương
                      thích giữa các thiết bị. Đánh giá: ảnh hưởng trung bình.
                    </li>

                    <li>
                      <div className="text-lg font-semibold">
                        5. Nguồn điện không ổn định:
                      </div>
                      - Nguồn điện không ổn định có thể gây ra sự cố trong quá
                      trình sáng tắt hệ thống. Điều này có thể làm gián đoạn
                      hoạt động của các linh kiện và gây ra lỗi hoạt động. Đánh
                      giá: ảnh hưởng trung bình đến lớn.
                    </li>

                    <li>
                      <div className="text-lg font-semibold">
                        6. Lỗi kết nối:
                      </div>
                      - Kết nối không đầy đủ, lỏng hoặc không đúng cách có thể
                      gây ra sự cố trong quá trình sáng tắt hệ thống. Điều này
                      có thể làm mất kết nối hoặc gây ra lỗi dữ liệu. Đánh giá:
                      ảnh hưởng trung bình.
                    </li>

                    <li>
                      <div className="text-lg font-semibold">
                        7. Sự cố mạng:
                      </div>
                      - Sự cố mạng như mất kết nối hoặc truyền dữ liệu không
                      đúng cũng có thể gây ra sự cố trong quá trình sáng tắt hệ
                      thống. Đánh giá: ảnh hưởng trung bình.
                    </li>
                  </ul>
                </div>
              </div>
            ),
          },
          {
            title: "# Bài tập",
            desc: (
              <a
                href="https://wokwi.com/projects/391955505801198593"
                className="text-2xl underline"
              >
                Link bài tập 1 : đèn led không hàm delay()
              </a>
            ),
          },
        ],
      },
      {
        id: 2,
        title: "Lập trình GPIO",
        link: "/blogs/1/2",
        thumbnail: img_2,
        main_content: [
          {
            title: "# So sánh tín hiệu Analog và Digital",
            desc: (
              <div>
                <div className="py-4">
                  <div className="mb-2 text-xl font-bold">
                    ## Tín hiệu Analog là gì?
                  </div>
                  <div>
                    - Tín hiệu Analog hay tín hiệu tương tự là tín hiệu được
                    truyền liên tục (không ngắt quãng) thay đổi theo thời gian.
                    Nghĩa là sau một chu kỳ, tín hiệu sẽ được lặp lại và chỉ
                    khác nhau về cường độ. Về mặt lý thuyết, loại tín hiệu này
                    có thể giữ nguyên hình dạng đến vô hạn, nhưng khi truyền
                    thực tế, nó sẽ bị ảnh hưởng bởi sự nhiễu sóng, dẫn đến méo
                    tín hiệu. Một số tín hiệu Analog mà chúng ta gặp hàng ngày
                    như âm thanh, ánh sáng, tốc độ gó, tần số,...
                  </div>
                </div>

                <div className="py-4">
                  <div className="mb-2 text-xl font-bold">
                    ## Tín hiệu Digital là gì?
                  </div>
                  <div>
                    - Tín hiệu Digital là tín hiệu số (tín hiệu rời rạc), được
                    sử dụng để biểu diễn dữ liệu dưới dạng chuỗi các giá trị rời
                    rạc ở bất kỳ thời điểm nào. Tín hiệu kỹ thuật số chỉ có thể
                    nhận một trong hai mức giá trị cố định là cao và thấp. Do
                    đó, trong khoa học máy tính, mức giá trị này được biểu thị
                    bằng mã nhị phân là 1 (cao) và 0 (thấp), còn trong công
                    nghiệp thì nó là On/Off. Loại tín hiệu này đại diện cho một
                    số thực trong phạm vi giá trị không đổi.
                  </div>
                </div>
                <div className="mx-auto flex w-full justify-center py-4">
                  <img
                    src="https://cdn.vjshop.vn/tin-tuc/phan-biet-tin-hieu-analog-va-digital/phan-biet-analog-va-digital-2.jpg"
                    alt=""
                  />
                </div>

                <div className="py-4">
                  <div className="mb-2 text-xl font-bold">
                    ## Đọc tín hiệu Analog (ESP32 + Arduino IDE)
                  </div>
                  <div>
                    - Đọc tín hiệu thì cảm biến, thiết bị hỗ trợ tín hiệu analog
                    bằng hàm analogRead() <br></br> - analogRead() luôn trả về 1
                    số nguyên nằm trong khoản từ 0 đến 4095 tương ứng với thang
                    điện áp (mặc đinh) từ 0 đến 3,3V
                  </div>
                </div>

                <div className="py-4">
                  <div className="mb-2 text-xl font-bold">
                    ## Xuất tín hiệu Analog (ESP32 + Arduino IDE)
                  </div>
                  <div>
                    - Xuất tín hiệu Analog điều khiển hay phát xung PWM ta dùng
                    hàm analogWrite() <br></br> - Không cần gọi hàm pinMode() để
                    đặt chế độ OUTPUT cho chân sẽ dùng để phát xung PWM
                  </div>
                </div>

                <div className="py-4">
                  <div className="mb-2 text-xl font-bold">
                    ## Đọc tín hiệu Digital (ESP32 + Arduino IDE)
                  </div>
                  <div>
                    - Đọc tín hiệu thì cảm biến, thiết bị hỗ trợ tín hiệu
                    Digital bằng hàm digitalRead() <br></br>- digitalRead() đọc
                    tín hiệu điện tử từ một pin digital (INPUT) trả về HIGH hoặc
                    LOW
                  </div>
                </div>
                <div className="py-4">
                  <div className="mb-2 text-xl font-bold">
                    ## Xuất tín hiệu Digital (ESP32 + Arduino IDE)
                  </div>
                  <div>
                    - Xuất tín hiệu Digital bằng hàm digitalWrite() <br></br>-
                    digitalWrite() xuất tín hiệu điện tử từ một pin digital
                    (OUTPUT) trả về HIGH hoặc LOW
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "# Các GPIO trên ESP32 và chức năng",
            desc: (
              <div>
                <div className="mb-2 mt-4 text-xl font-bold">## GPIO</div>
                - Thiết bị ngoại vi được sử dụng phổ biến nhất là GPIO. ESP32 có
                34 chân GPIO với mỗi chân thực hiện nhiều hơn một chức năng (chỉ
                một chân hoạt động).
                <br />
                - Bạn có thể cấu hình chân dưới dạng GPIO hoặc ADC hoặc UART
                trong chương trình.
                <br />- Các chân ADC và DAC được xác định trước và bạn phải sử
                dụng các chân do nhà sản xuất chỉ định. Nhưng các chức năng khác
                như PWM, SPI, UART, I2C, ... có thể được gán cho bất kỳ chân
                GPIO nào thông qua chương trình.
                <div className="mb-2 mt-4 text-xl font-bold">## RTC GPIO</div>-
                ESP32 có 16 GPIO RTC, là một phần của hệ thống con RTC
                Low-Power. Các chân này có thể được sử dụng để đánh thức ESP32
                khỏi chế độ ngủ sâu làm nguồn đánh thức bên ngoài.
                <div className="mb-2 mt-4 text-xl font-bold">## ADC</div>- ESP32
                có hai module chuyển đổi analog sang kỹ thuật số SAR 12 bit với
                8 kênh và 10 kênh mỗi module. Vì vậy, khối ADC1 và ADC2 kết hợp
                với nhau có 18 kênh ADC 12-bit. Với độ phân giải 12-bit, các giá
                trị kỹ thuật số đầu ra sẽ nằm trong khoảng 0 - 4093.
                <div className="mb-2 mt-4 text-xl font-bold">## DAC</div>
                - Bộ vi điều khiển ESP32 có hai kênh chuyển đổi kỹ thuật số sang
                analog 8 bit độc lập để chuyển đổi các giá trị kỹ thuật số sang
                tín hiệu điện áp analog.
                <br />
                - Có mạng điện trở bên trong và sử dụng nguồn điện làm điện áp
                tham chiếu đầu vào. Hai chân GPIO sau được liên kết với các chức
                năng của DAC.
                <br />
                <div className="pl-6">+ DAC1 - GPIO25</div>
                <div className="pl-6">+ DAC2 -GPIO26</div>
                <div className="mb-2 mt-4 text-xl font-bold">
                  ## GPIO cảm ứng điện dung
                </div>
                - SoC ESP32 có 10 GPIO cảm ứng điện dung, có thể phát hiện các
                biến thể về điện dung trên chân cắm do chạm hoặc tiếp cận chân
                GPIO bằng ngón tay hoặc bút stylus. Các GPIO cảm ứng này có thể
                được sử dụng để triển khai các miếng cảm ứng điện dung mà không
                cần bất kỳ phần cứng bổ sung nào.
                <div className="mb-2 mt-4 text-xl font-bold">## SPI</div>- Chip
                Wi-Fi ESP32 có ba khối SPI (SPI, HSPI và VSPI) ở cả chế độ
                master và chế độ slave. SPI được sử dụng để giao tiếp với bộ nhớ
                Flash. Vì vậy, bạn có hai giao diện SPI.
                <div className="mb-2 mt-4 text-xl font-bold">## I2C</div>
                - Có hai giao diện I2C trong ESP32 với sự linh hoạt hoàn toàn
                trong việc gán các chân, tức là, người dùng có thể gán các chân
                SCL và SDA cho cả hai giao diện I2C trong chương trình.
                <br />
                - Nếu bạn đang sử dụng Arduino IDE, thì các chân I2C mặc định
                là:
                <br />
                <div className="pl-6">+ SDA - GPIO21</div>
                <div className="pl-6">+ SCL - GPIO22</div>
                <div className="mb-2 mt-4 text-xl font-bold">## PWM</div>- Bộ
                điều khiển PWM trong ESP32 có 16 kênh dạng sóng PWM độc lập với
                tần số và chu kỳ nhiệm vụ có thể định cấu hình. Dạng sóng PWM có
                thể được sử dụng để điều khiển động cơ và LED. Bạn có thể cấu
                hình tần số tín hiệu PWM, kênh, chân GPIO và cả chu kỳ nhiệm vụ.
              </div>
            ),
          },
          {
            title: "# Câu hỏi",
            desc: (
              <div>
                <div className="text-xl font-bold">
                  ## So sánh tín hiệu digital và analog?
                </div>
                <div className="mb-2 mt-4">- Tín hiệu digital</div>
                <ul className="list-decimal pl-10">
                  <li> Đại diện bằng các giá trị rời rạc như 0 và 1.</li>
                  <li> Dễ dàng xử lý và truyền qua các mạch logic.</li>
                  <li>
                    Có khả năng chống nhiễu tốt hơn so với tín hiệu analog.
                  </li>
                  <li> Thích hợp cho việc lưu trữ và xử lý dữ liệu. </li>
                  <li>
                    Sử dụng các thiết bị nhị phân như vi xử lý, bộ nhớ flash,
                    các cổng logic.
                  </li>
                  <li>
                    Thường được sử dụng trong hệ thống kỹ thuật số như vi điều
                    khiển, máy tính, viễn thông số.
                  </li>
                </ul>

                <div className="mb-2 mt-4">- Tín hiệu analog</div>
                <ul className="list-decimal pl-10">
                  <li>
                    Đại diện bằng các giá trị liên tục trong một phạm vi nhất
                    định.
                  </li>
                  <li>
                    Thích hợp cho việc biểu diễn các tín hiệu liên tục như âm
                    thanh, hình ảnh, dữ liệu cảm biến.
                  </li>
                  <li>
                    Cần xử lý và truyền qua các mạch kỹ thuật số để chuyển đổi
                    thành dạng số.
                  </li>
                  <li>
                    Nhạy cảm hơn với nhiễu và có thể bị ảnh hưởng bởi các yếu tố
                    ngoại vi như điện áp, nhiệt độ.
                  </li>
                  <li>
                    Sử dụng các thành phần như cảm biến, bộ điều chỉnh tần số,
                    mạch khuếch đại.
                  </li>
                  <li>
                    Thường được sử dụng trong các ứng dụng như âm thanh, điều
                    khiển tín hiệu, cảm biến môi trường.
                  </li>
                </ul>
                <div className="mb-2 mt-4">
                  - Tóm lại, tín hiệu digital và analog có tính chất và ứng dụng
                  khác nhau. Digital thích hợp cho việc xử lý và truyền thông dữ
                  liệu rời rạc, trong khi analog phù hợp cho việc biểu diễn và
                  xử lý các tín hiệu liên tục.
                </div>

                <div className="text-xl font-bold">## Phát xung PWM là gì?</div>
                <div className="mb-4 mt-2">
                  - Phát xung PWM (Pulse Width Modulation) là một kỹ thuật điều
                  khiển tín hiệu trong điện tử.
                  <br />
                  - Nó cho phép điều chỉnh độ rộng của các xung trong một chu kỳ
                  để điều khiển mức độ hoạt động của một thiết bị hoặc hệ thống.
                  <br />- Bằng cách thay đổi độ rộng xung, ta có thể điều chỉnh
                  độ sáng của đèn LED, tốc độ quay của động cơ, nhiệt độ và
                  nhiều ứng dụng khác.
                  <br />- Kỹ thuật phát xung PWM rất phổ biến và được sử dụng
                  rộng rãi trong điện tử và hệ thống điều khiển.
                </div>
              </div>
            ),
          },
          {
            title: "# Bài tập",
            desc: (
              <div className="flex flex-col gap-4">
                <a
                  href="https://wokwi.com/projects/391957717923373057"
                  target="_blank"
                  rel="noreferrer"
                  className="text-2xl underline"
                >
                  Link bài 1 : Bật/ tắt đèn LED bằng kỹ thuật debounce
                </a>
                <a
                  href="https://wokwi.com/projects/391957809372839937"
                  target="_blank"
                  rel="noreferrer"
                  className="text-2xl underline"
                >
                  Link bài 2 : Điều khiển độ sáng đèn LED bằng biến trở với
                  ESP32
                </a>
              </div>
            ),
          },
        ],
      },
      {
        id: 3,
        title: "Giao thức giao tiếp Serial - UART",
        link: "/blogs/1/3",
        thumbnail: img_3,
        main_content: [
          {
            title: "# Khái quát về Serial",
            desc: (
              <div>
                <div>
                  <div className="h2">## Định nghĩa giao tiếp UART</div>
                  <div className="h3">
                    UART (Universal Asynchronous Receiver Transmitter) bộ truyền
                    nhận dữ liệu nối tiếp bất đồng bộ. Trong giao tiếp UART, 2
                    UART giap tiếp trực tiếp với nhau.UART truyền chuyển đổi dữ
                    liệu song song từ một thiết bị điều khiển như CPU thành dạng
                    nối tiếp, truyền nó nối tiếp đến UART nhận, sau đó chuyển
                    đổi dữ liệu nối tiếp trở lại thành dữ liệu song song cho
                    thiết bị nhận.
                  </div>
                </div>
                <div>
                  <div className="h2">## Giao tiếp UART</div>
                  <div className="h3">
                    1. Hai đường dây mà mỗi thiết bị UART sử dụng là :
                    <div className="h4">+ Transmitter(Tx)</div>
                    <div className="h4">+ Receiver(Rx)</div>
                    2. Dây tín hiệu được nối chéo với nhau:
                    <div className="h4">+ Tx - Rx</div>
                    <div className="h4">+ Rx - Tx</div>
                    <div className="h4">+ GND - GND</div>
                    3. UART truyền dữ liệu theo 1 trong 3 chế độ:
                    <div className="h4">
                      + Full duplex: Giao tiếp đồng thời đến và đi từ mỗi master
                      và slave
                    </div>
                    <div className="h4">
                      + Half duplex: Dữ liệu đi theo một hướng tại một thời điểm
                    </div>
                    <div className="h4">+ Simplex: Chỉ giao tiếp một chiều</div>
                    4. Các lưu ý trong chuẩn truyền thông UART
                    <div className="mx-auto my-4 flex justify-center">
                      <table>
                        <tr>
                          <td>Số lượng sử dụng</td>
                          <td>2</td>
                        </tr>
                        <tr>
                          <td>Tốc độ truyền (Baudrate)</td>
                          <td>
                            110 bps đến 230400 bps Có thể thiết lập trong code
                          </td>
                        </tr>
                        <tr>
                          <td>Phương pháp truyền</td>
                          <td>Bất đồng bộ</td>
                        </tr>
                        <tr>
                          <td>Kiểu truyền dữ liệu</td>
                          <td>Nối tiếp</td>
                        </tr>
                        <tr>
                          <td>Số lượng MASTERS tối đa</td>
                          <td>1</td>
                        </tr>
                        <tr>
                          <td>Số lượng SLAVES tối đa</td>
                          <td>1</td>
                        </tr>
                        <tr>
                          <td>
                            Hai thiết bị giao tiếp UART với nhau cần nối chung
                            GND
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "# Lập trình UART với ESP32",
            desc: (
              <div>
                <div>
                  <div className="h2">## Các chân UART trên ESP32</div>
                  <div className="flex w-full items-center justify-center">
                    <table className="w-1/2 text-center">
                      <tr>
                        <th>UART</th>
                        <th>RX IO</th>
                        <th>TX IO</th>
                        <th>CTS</th>
                        <th>RTS</th>
                      </tr>
                      <tr>
                        <td>UART0</td>
                        <td>GPIO3</td>
                        <td>GPIO1</td>
                        <td>N/A</td>
                        <td>N/A</td>
                      </tr>
                      <tr>
                        <td>UART1</td>
                        <td>GPIO9</td>
                        <td>GPIO10</td>
                        <td>GPIO6</td>
                        <td>GPIO11</td>
                      </tr>
                      <tr>
                        <td>UART2</td>
                        <td>GPIO16</td>
                        <td>GPIO17</td>
                        <td>GPIO8</td>
                        <td>GPIO7</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div>
                  <div className="h2">## Thư viện</div>
                  <div className="h3">
                    - Sử dụng thư viện Hardware Serial có sẵn trên ESP32 Arduino
                    có thể sử dụng ngay trên Arduino IDE bằng cách gọi:
                  </div>
                  <div className="h4">
                    + Serial.begin() ứng với UART0 dùng để debug và flash, mặc
                    định Baudrate = 115200 bps
                  </div>
                  <div className="h4">+ Serial1.begin() ứng với UART1</div>
                  <div className="h4">+ Serial2.begin() ứng với UART2</div>
                  <div className="h2">
                    ## Một số hàm và thủ tục của thư viện Serial(ESP32 + Arduino
                    IDE)
                  </div>
                  <ul className="h3">
                    <li>Serial.available()</li>
                    <li>begin()</li>
                    <li>end()</li>
                    <li>find()</li>
                    <li>peek()</li>
                    <li>print()</li>
                    <li>write()</li>
                  </ul>
                  <div className="h2">## Serial Debug</div>
                  <div className="h3">1. Serial monitor</div>
                  <div className="h4">
                    - Là công cụ Arduino IDE, giúp bo mạch và máy tính có thể
                    gửi và nhận dữ liệu với nhau qua giap tiếp USB
                  </div>
                  <div className="h3">2. Serial monitor</div>
                  <div className="h4">
                    - Là công cụ để theo dõi các dữ liệu khác nhau gửi từ bo
                    mạch.Được sử dụng để in dữ liệu trực quan đồ hoạ, giúp hiểu
                    và so sánh dữ liệu tốt hơn.
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "# Câu hỏi",
            desc: (
              <div>
                <div className="h2">
                  ## So sánh serial monitor với serial plotter?
                </div>
                <div className="h3">
                  - Serial Monitor là công cụ để gửi và nhận dữ liệu qua giao
                  tiếp UART và hiển thị dưới dạng văn bản, thường được sử dụng
                  để gỡ lỗi và hiển thị thông tin debug.
                </div>
                <div className="h3">
                  - Serial Plotter là công cụ để hiển thị dữ liệu số từ Arduino
                  dưới dạng biểu đồ đường theo thời gian, hữu ích để theo dõi sự
                  thay đổi của các giá trị số.
                </div>
                <div className="h2">
                  ## So sánh các Serial mode và baudrate?
                </div>
                <div className="h3">
                  - Serial Mode là chế độ hoạt động của giao tiếp UART, quy định
                  cách dữ liệu được truyền qua UART.
                </div>
                <div className="h3">
                  - Baud Rate là tốc độ truyền dữ liệu qua UART, được đo bằng số
                  bit truyền trong một giây (bps).
                </div>
              </div>
            ),
          },
          {
            title: "# Bài tập",
            desc: (
              <div>
                <a
                  href="https://wokwi.com/projects/391958226763780097"
                  target="_blank"
                  rel="noreferrer"
                  className="text-2xl underline"
                >
                  Link bài tập 1: Lập trình xuất thông tin lên màn hình Serial
                  monitor thông tin cá nhân (MSSV, Họ tên , lớp)
                </a>
              </div>
            ),
          },
        ],
      },
      {
        id: 4,
        title: "Giao thức giao tiếp Onewire",
        link: "/blogs/1/4",
        thumbnail: img_0,
        main_content: [
          {
            title: "Khái quát giao tiếp Onewire",
            desc: 
            (<div>
              <div>
                <div className="h2">Khát quát về giao tiếp Onewire</div>
                <div className="h3">Onewire là hệ thống bus giao tiếp được thiết kế bởi Dallas Semiconductor Corp. Giống như tên gọi , hệ thống bus này chỉ sử dụng 1 dây để truyền nhận dữ liệu.One wire có hai chế độ làm việc là standard và onedrive. Khi làm việc ở chế độ standard thì tốc độ truyền dữ liệu là 15.4kbps, với chế độ overdrive là 125kbps.</div>
                <div className="h3">Các đặc điểm:</div>
                <div className="h4">+ Sử dụng một dây</div>
                <div className="h4">+ Khoảng cách xa</div>
                <div className="h4">+ Tốc độ không cao</div>
                <div className="h4">+ 1 Master nhiều Slave</div>
                <div className="h3">Sơ đồ kết nối: </div>
                <div className="h4">
                  <img src="https://www.thegioiic.com/upload/large/44585.jpg"/>
                </div>
                <div className="h3">Ứng dụng</div>
                <div className="h4">Cảm biến nhiệt độ DS18B20 sử dụng giao tiếp One Wire</div>
                <div className="h4">Cảm biến DHT11 sử dụng giao tiếp One Wire</div>
                <div className="h4">
                  <img src="https://www.thegioiic.com/upload/large/24509.jpg"/>
                </div>
              </div>

              
            </div>)
          },
          {
            title: "Lập trình với thiết bị hỗ trợ OneWire Protocal",
            desc:
            <div>
                <div className="h2">Cảm biến DS18B20 Chuẩn bị thiết bị</div>
                <div className="h3">+ 1 Board ESP32 DEVKIT V1</div>
                <div className="h3">+ 1 cảm biến DS18B20</div>
                <div className="h3">+ 1 điện trở 4.7k ohm</div>
                <div className="h2">Kết nối thiết bị</div>
                <div className="h3">
                  <img src="https://lh7-us.googleusercontent.com/1FlFlP3eIPgrQ8BSe4-Gmm5oE0l5lfgziRlLvnfn6Gja_WnxXZ8pgB9DyM3k7fhp3HKSl5hUHPuRAkO2iKpFvBSlFy43FLLut3HXPKMjYBMFVWgBg3MVxOxP0OUfndA7QzCptv1hjnj4WlGqJc8RsSqtEQ=s2048"/>
                  <img src="https://lh7-us.googleusercontent.com/nuFKKdwea6u_bJ5JY19vCcoxRMs8bkavGLlPOObQekHGijwpzW8Z-Fj38ptHweveV-ac8mlwkHk2kKKEuhYVvO6420p_EDNiHx4Bv3Dt29A446IOJivzAvN2DC_8CcpYlNyevG5LtQ6vt3g4kkBu_ZhMXQ=s2048"/>
                </div>
                <div className="h3">
                  - Cài đặt thư viện OneWire, Dallas Temperature thông qua Lib manager trên Arduino IDE.Sử dụng thư viện OneWire, Dallas Temperature có thể sử dụng ngay trên Arduino IDE.
                </div>

                <div className="h2">Cảm biến DHT (DHT11/DHT22) Chuẩn bị thiết bị</div>
                <div className="h3">
                  <img src="https://lh7-us.googleusercontent.com/aw-1jlUS6zYoTmvyNVRw_FMXHqTozWoCxWOE5XF_cupM-UJhGEr5NiXk8N2afR0FgK8EHfKHEtN68TKaStPE_igZB09rxRMfqPQm6H4SN87y4tjG1w0Ekuv_MiYaGFWnePSH_yuw-p3QOSpYMJ1XLSihGA=s2048"/>
                  <img src="https://lh7-us.googleusercontent.com/8nGPcLxkABNd8e5RWLaRqUdeZ7mYoS0RXNYoDb8gzHImvKNWsxxQD4pttPgDMlqWsfESx1rcdEIdf_0zzESOX5L8kZ1pSUj8Ux6MuTDNHdv5Aoo77lFEY_HH-iH0AcXnTdIWvHlu8ElK4YNGfDJh9qFV8A=s2048" />
                </div>
                <div className="h2">Kết nối thiết bị</div>
                <div className="h3">
                  <img src="https://lh7-us.googleusercontent.com/yHCqkvTTHfC_YitHhrStlkLPUe3f2UMDfiQtJJfrzzwd2N5a7LV0Sidwf1I_uiff4M8XkR8Gc_4mloEFAl2uWeboJaSRhTkNNMdZauAWdU702OGAHYq1LEt9snL3pVMYka5nkil7ZJPGbx_J3djvKbDNGw=s2048" />
                  <img src="https://lh7-us.googleusercontent.com/HXkU6QLu4wsqksMgXiy3LLW9jXDmVq_D2dPmO5zLj8vaSyfREPpeVcX8aJF_TZahVg4BinYQmddaenovfcZI4lL08Wz9paJ8a6gibm0fcrfSDDUFwE7dzpmkC6m0ivbJl1BI5ChGiBxKYfzTMPywudjvnQ=s2048"/>
                </div>
                <div className="h3">Cài đặt 2 thư viện sau:</div>
                <div className="h3">
                  - DHT library from Adafruit và Adafruit Unified Sensor library. Thông qua Library manager trên Arduino IDE.
                  - Khai báo các thông tin sau để đọc được DHT11: #include "DHT.h"
                  - Tạo 1 đối tượng DHT với GPIO kết nối với pin Signal DHT11 và loại DHT sử dụng: DHT dht([GPIO], [DHTTYPE])
                  - Khởi tạo cảm biến ở setup() : dht.begin()
                </div>
              </div>
          },
          {
            title: "Câu hỏi",
            desc: 
            <div>
              <div className="h2">1. Những lưu ý khi sử dụng DHT11/DHT22?</div>
              <div className="h3">- Tất cả các cảm biến đều cần được bảo quản và sử dụng một cách cẩn thận. Đối với DHT11/DHT22, hãy chú ý đến điều kiện môi trường, cung cấp điện áp và dòng điện đúng, đợi đủ thời gian cho đo độ ẩm và nhiệt độ, kết nối chính xác, và kiểm tra định kỳ.</div>
              <div className="h2">1. Những lưu ý khi sử dụng DHT11/DHT22?</div>
              <div className="h3">Ưu điểm:</div>
              <div className="h4">- Sử dụng chỉ một dây dẫn.</div>
              <div className="h4">- Tiết kiệm chân giao tiếp.</div>
              <div className="h4">- Đa thiết bị trên cùng một dây.</div>
              <div className="h4">- Ổn định và đáng tin cậy.</div>
              <div className="h3">Nhược điểm:</div>
              <div className="h4">- Tốc độ truyền dữ liệu chậm.</div>
              <div className="h4">- Giới hạn về khoảng cách.</div>
              <div className="h4">- Khả năng xung đột dữ liệu.</div>
              <div className="h4">- Độ chính xác và độ tin cậy không cao trong môi trường nhiễu.</div>
            </div>
          },
          {
            title: "Bài tập",
            desc:
            <div>
              <a href="https://wokwi.com/projects/393070551218506753" target="_blank"
                  rel="noreferrer" className="h2">Bài tập 1: bật tắt đèn bằng cảm biến nhiệt độ, độ ẩm</a>
            </div>
          }
        ]
      },
      {
        id: 5,
        title: "Giao thức giao tiếp I2C",
        link: "/blogs/1/5",
        thumbnail: img_0,
        main_content: [
          {
            title: "Giới thiệu I2C",
            desc: <div>
              <div className="h2">Chuẩn giao tiếp I2C là gì?</div>
              <div className="h3">I2C hay IIC (Inter – Integrated Circuit) là 1 giao thức giao tiếp nối tiếp đồng bộ được phát triển bởi Philips Semiconductors, sử dụng để truyền nhận dữ liệu giữa các IC với nhau chỉ sử dụng hai đường truyền tín hiệu.</div>
              <div className="h3">
              - SDA (Serial Data) - đường truyền cho master và slave để gửi và nhận dữ liệu.
              - SCL (Serial Clock) - đường mang tín hiệu xung nhịp.
              </div>

              <div className="h2">Cách hoạt động của I2C</div>
              <div className="h3">
                <img src="https://www.thegioiic.com/upload/large/44530.jpg" />

              </div>
              <div className="h3">
                <div> Mỗi thiết bị I2C có một địa chỉ duy nhất để xác định nó trên mạch.</div>
                <div> Trong quá trình truyền dữ liệu, master (thiết bị điều khiển) khởi tạo và điều khiển quá trình truyền dẫn dữ liệu.</div>
                <div> Master gửi một tín hiệu bắt đầu (Start) trên dây dữ liệu để bắt đầu một phiên truyền dữ liệu.</div>
                <div> Sau đó, master gửi địa chỉ của thiết bị mục tiêu cùng với bit điều khiển để chỉ định liệu thao tác là ghi (write) hoặc đọc (read).</div>
                <div> Cả master và thiết bị mục tiêu đồng ý về địa chỉ và chế độ hoạt động, sau đó dữ liệu được truyền đi hoặc nhận về.</div>
                <div> Cuối cùng, master gửi một tín hiệu kết thúc (Stop) để kết thúc phiên truyền dữ liệu.</div>
              </div>

              <div className="h2">Ứng dụng</div>
              <div className="h3">
                <img src="https://car.mybk.vn/attachments/1642502377548-png.483/" />
              </div>
              <div className="h3">
              Giao thức I2C thường được sử dụng trong các ứng dụng như vi xử lý nhúng, cảm biến, bộ điều khiển, màn hình LCD, EEPROM (Electrically Erasable Programmable Read-Only Memory), và các thiết bị khác trên các board phát triển và các thiết bị IoT.
              </div>
            </div>
          }
        ]
      },
      {
        id: 6,
        title: "Giao thức giao tiếp SPI",
        link: "/blogs/1/6",
        thumbnail: img_0,
        main_content: [
          {
            title: "Giới thiệu về giao thức giao tiếp SPI",
            desc: 
            <div>
              <div className="h2">Giao thức giao tiếp SPI là gì</div>
              <div className="h3">SPI (Serial Peripheral Interface) là một giao diện truyền thông đồng bộ được sử dụng để giao tiếp giữa các thiết bị trong hệ thống điện tử. Nó cho phép truyền dữ liệu giữa một thiết bị master và nhiều thiết bị slave thông qua các đường tín hiệu chung.</div>
              <div className="h3">
                <img src="https://arduinokit.vn/wp-content/uploads/2023/05/giao-tiep-spi.png" />
              </div>
              <div className="h2">Cấu tạo</div>
              <div className="h3">
             <div>- SCLK (Serial Clock): Tín hiệu xung đồng hồ điều khiển cho việc đồng bộ truyền dữ liệu.</div>
             <div>- MOSI (Master Out Slave In): Tín hiệu dữ liệu được truyền từ thiết bị master tới các thiết bị slave.</div>
             <div>- MISO (Master In Slave Out): Tín hiệu dữ liệu được truyền từ các thiết bị slave về thiết bị master.</div>
             <div>- SS/CS (Slave Select/Chip Select): Tín hiệu được sử dụng để chọn thiết bị slave nào sẽ tham gia truyền thông.</div>
              </div>

              <div className="h2">Cách hoạt động</div>
              <div className="h3">Nguyên lý hoạt động của giao tiếp SPI (Serial Peripheral Interface) là dựa trên việc truyền dữ liệu tuần tự giữa một thiết bị master và một hoặc nhiều thiết bị slave. Giao tiếp SPI sử dụng một tín hiệu clock chung và các tín hiệu truyền dữ liệu đồng thời trên các kênh tương ứng.</div>
              <div className="h3">
                <img src="https://arduinokit.vn/wp-content/uploads/2023/05/chuan-giao-tiep-spi-voi-nhieu-slaves-768x590.png" />
              </div>
              <div className="h2">Ứng dụng</div>
              <div className="h3">Các thiết bị sử dụng spi như thẻ nhớ, module đọc thẻ rfid, receiver 2.4ghz đều dùng spi để giap tiếp với controller</div>
              <div className="h3 flex gap-4">
                <img src="https://media.canva.com/1/image-resize/1/690_380_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9FZVp2NC9NQUdBaGlFZVp2NC8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAC8a5bTZGk1_p6h1lXlXoM0HUr6bsV4xCbYxd9SQmZAS&exp=1712908083&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAAFjZAjhdKXbZ8whTer5X1vSOBJlZJS7ww_MwAmxZRE4e" />
                <img src="https://media.canva.com/1/image-resize/1/200_167_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS82SDRFRS9NQUdBaHA2SDRFRS8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAFRIXG6SMC1J1oon-zKP_pXck5fB6GjZbeitqiKKWzfe&exp=1712907606&x-canva-quality=thumbnail&csig=AAAAAAAAAAAAAAAAAAAAAAWIL6G9ogC8GwmuS22RJoJ0jPc8Wqiom1Xk0CHxGXL1" />
              </div>

            
            </div>
          },
          {
            title: "Lập trình sử dụng giap tiếp spi với Arduino",
            desc: 
            <div>
              <div className="h2">1. Kết nối phần cứng</div>
              <div className="h3">
             <div> Kết nối chân MOSI (Master Out Slave In) của Arduino với chân MOSI của thiết bị slave.</div>
             <div> Kết nối chân MISO (Master In Slave Out) của Arduino với chân MISO của thiết bị slave.</div>
             <div> Kết nối chân SCK (Serial Clock) của Arduino với chân SCK của thiết bị slave.</div>
             <div> Kết nối chân SS (Slave Select) của Arduino với chân SS của thiết bị slave. Chân SS sẽ được sử dụng để chọn thiết bị slave mà bạn muốn truyền dữ liệu.</div>
              </div>
              <div className="h2">2. Khởi tạo giao thức SPI</div>
              <div className="h3">
              <div> Trong hàm setup(), sử dụng lệnh SPI.begin() để khởi tạo giao thức SPI trên Arduino.</div>
               <div> Thiết lập các tùy chọn giao thức như tốc độ truyền (SPI.setClockDivider()), bit dữ liệu (SPI.setDataMode()) và bit đánh dấu (SPI.setBitOrder()). Điều này phụ thuộc vào thiết bị slave bạn đang sử dụng, vì vậy hãy kiểm tra datasheet của thiết bị để xác định các giá trị chính xác.</div>
              </div>

              <div className="h2">3. Truyền dữ liệu</div>
              <div className="h3">
                 <div> Để truyền dữ liệu từ master tới slave, sử dụng lệnh SPI.transfer(data) trong hàm loop(). Điền giá trị dữ liệu bạn muốn truyền vào tham số data. Hàm này sẽ trả về giá trị nhận được từ slave (nếu có).</div>
                 <div> Để truyền dữ liệu từ slave về master, bạn cũng sử dụng lệnh SPI.transfer(data). Tuy nhiên, bạn cần kích hoạt trạng thái slave bằng cách giảm chân SS xuống mức LOW trước khi truyền dữ liệu và tăng lên mức HIGH sau khi hoàn thành.</div>
              </div>

              <div className="h2">4. Giải phóng giao thức SPI</div>
              <div className="h3">Khi không sử dụng giao thức SPI nữa, hãy sử dụng lệnh SPI.end() để giải phóng tài nguyên và tắt giao thức trên Arduino.</div>
            </div>
          }
        ]
      },
      {
        id: 7,
        title: "Các giao thức truyền thông trong IoT",
        link: "/blogs/1/7",
        thumbnail: img_0,
        main_content: [
          {
            title: "Giới thiệu các giao thức truyền thông trong IoT",
            desc: 
            <div>
              <div className="h2">1. Message Queuing Telemetry Transport (MQTT)</div>
              <div className="h3">MQTT là gì?</div>
              <div className="h4">- MQTT là một giao thức kết nối internet vạn vật trong các ứng dụng M2M. Là một giao thức theo cơ chế xuất bản/đăng ký,  ở đó máy client có thể xuất bản hay nhận bản tin. Nó giúp giao tiếp dễ dàng giữa nhiều thiết bị. Nó là một giao thức nhắn tin đơn giản được thiết kế cho các thiết bị bị hạn chế và có băng thông thấp, vì vậy nó là một giải pháp hoàn hảo cho các ứng dụng internet vạn vật. Nó là một giao thức cực kỳ nhẹ cho việc truyền tải bản tin đăng ký/xuất bản. Nó rất hữu ích cho việc kết nối với vị trí ở xa nơi có băng thông không cao.</div>
              <div className="h3">Đặc điểm của MQTT</div>
              <div className="h4">
             <div> Nó không yêu cầu cả Client và Server phải thiết lập kết nối cùng một lúc.</div>
             <div> Nó cho phép Client đăng ký lựa chọn chủ đề để họ có thể nhận được thông tin họ đang tìm kiếm nhanh chóng.</div>
             <div> Nó cung cấp truyền dữ liệu nhanh hơn, giống như cách WhatsApp / messenger cung cấp việc phân phối nhanh hơn. Đó là một giao thức nhắn tin thời gian thực.</div>
             <div> Nó được thiết kế như một giao thức nhắn tin đơn giản và nhẹ sử dụng hệ thống xuất bản / đăng ký để trao đổi thông tin giữa Client và Server.</div>
             <div> Nó là một giao thức máy với máy, tức là nó cung cấp giao tiếp giữa các thiết bị.</div>
              </div>
              <div className="h3">Ứng dụng</div>
              <div className="h4">
              <div> Facebook hiện đang sử dụng MQTT cho ứng dụng Messenger của mình, không chỉ vì giao thức tiết kiệm pin trong quá trình nhắn tin giữa điện thoại di động với điện thoại, mà còn vì giao thức này cho phép gửi bản tin một cách hiệu quả trong mili giây (mili giây), bất chấp kết nối internet không nhất quán trên toàn cầu .</div>

              <div> Hầu hết các nhà cung cấp dịch vụ đám mây lớn, bao gồm Amazon Web Services (AWS), Google Cloud, IBM Cloud và Microsoft Azure, đều hỗ trợ MQTT.</div>

              <div> MQTT rất phù hợp với các ứng dụng sử dụng thiết bị M2M và IoT cho các mục đích như phân tích thời gian thực, bảo trì phòng ngừa và giám sát môi trường, bao gồm nhà thông minh, chăm sóc sức khỏe, hậu cần, công nghiệp và sản xuất.</div>
              </div>
              <div className="h2">2. HyperText Transfer Protocol (HTTP)</div>
              <div className="h3">HTTP là gì?</div>
              <div className="h4">
              <div> HTTP là viết tắt của HyperText Transfer Protocol, một giao thức ứng áp dụng cho các hệ thống thông tin siêu phương tiện phân tán, cộng tác, cho phép người dùng giao tiếp dữ liệu trên World Wide Web</div>

              <div>Ví dụ: http: // www ……..: URL bắt đầu bằng đoạn HTTP</div>

               <div> Cụ thể hơn, HTTP là một giao thức yêu cầu/phản hồi không trạng thái, nơi các Client yêu cầu thông tin từ Server và Server sẽ phản hồi các yêu cầu này theo đó (mỗi yêu cầu độc lập với yêu cầu khác). Nó cho phép tìm nạp các tài nguyên, chẳng hạn như tài liệu HTML</div>
              </div>

              <div className="h3">Mục đích của giao thức HTTP</div>
              <div className="h4">HTTP được phát minh cùng với HTML để tạo ra trình duyệt web dựa trên văn bản, tương tác đầu tiên: World Wide Web ban đầu. Ngày nay, giao thức này vẫn là một trong những phương tiện chính để sử dụng Internet .</div>
              <div className="h4">
                <img src="https://www.daviteq.com/blog/wp-content/uploads/2020/09/WP_2006_H7_Data_through_the_internet-e1600672192270.png" />
              </div>
              <div className="h3">Ứng dụng</div>
              <div className="h4">
              Giao thức HTTP được sử dụng để khởi động World Wide Web để truyền dữ liệu dưới dạng văn bản, âm thanh, hình ảnh và video từ Server đến trình duyệt web của người dùng và ngược lại. HTTP hiện là nền tảng truyền dữ liệu của ứng dụng duyệt web ngày nay và được sử dụng rộng rãi trong hệ thống Internet of Things. Mặc dù giao thức Http có nhiều nhược điểm trong việc truyền dữ liệu và không phù hợp bằng các giao thức tối ưu khác như MQTT, CoAP, AMQP sử dụng cho IoT, nhưng giao thức này vẫn phổ biến trong lĩnh vực nhà thông minh cũng như việc sử dụng nhiều trong bộ vi điều khiển và vi xử lý tiên tiến.
              </div>

              <div className="h2">3. Constrained Application Protocol (CoAP)</div>
              <div className="h3">CoAP là gì?</div>
              <div className="h4">
              CoAP là một giao thức đơn giản chi phí thấp được thiết kế riêng cho các thiết bị hiệu năng thấp (chẳng hạn như vi điều khiển) và nơi mạng có băng thông thấp. Giao thức này được sử dụng để trao đổi dữ liệu M2M và rất giống với HTTP.
              </div>
              <div className="h3">Các tính năng chính của CoAP</div>
              <div className="h4">
             <div>+ Giao thức web nhỏ gọn được sử dụng trong M2M.</div>
             <div>+ Bảo mật bằng DTLS.</div>
             <div>+ Trao đổi thông điệp không đồng bộ.</div>
             <div>+ Header gói tin nhỏ, dễ tách thông tin.</div>
             <div>+ Hỗ trợ URI và loại nội dung.</div>
             <div>+ Khả năng proxy và bộ nhớ đệm.</div>
             <div>+ Tuỳ chọn khai thác tài nguyên.</div>
             <div>+ Liên kết UDP (User Datagram Protocol) với độ tin cậy tùy chọn hỗ trợ các yêu cầu Unicast và Multicast.</div>
              </div>

              <div className="h3">Ứng dụng</div>
              <div className="h4">Thiết bị thông tin, thiết bị điều khiển và thiết bị truyền thông trong mạng nhà thông minh có đặc điểm là chi phí thấp và nhẹ. Do đó, CoAP có thể được coi là sự lựa chọn giao thức tốt nhất cho mạng truyền thông gia đình.</div>
            </div>
          }
        ]
      },
      {
        id: 8,
        title: "WebServer",
        link: "/blogs/1/8",
        thumbnail: img_0,
        main_content: [
          {
            title: "Giới thiệu Web Server",
            desc:
            <div>
              <div className="h2">
                Web server là gì?
              </div>
              <div className="h3">
                Web server là máy chủ cài đặt các chương trình phục vụ các ứng dụng web. Webserver có khả năng tiếp nhận request từ các trình duyệt web và gửi phản hồi đến client thông qua giao thức HTTP hoặc các giao thức khác.
              </div>

              <div className="h2">Wifi Lib</div>
              <div className="h3">Cho phép thiết lập kết nối mạng (cục bộ và internet) module wifi. Với thư viện này có thể khởi tạo máy chủ , máy khách và gửi/ nhận các gói UDP qua wifi.Module có thể kết nối với các mạng mở hoặc được mã hóa(WEP,WPA).Địa chỉ IP có thể được gán tĩnh hoặc thông qua DHCP.Thư viện cũng có thể quản lý DNS.</div>
            
              <div className="h2">Wifi mode ESP32</div>
              <div className="h3">
                Chức năng kết nối wifi, có thể lập trình trong chương trình. Có 3  chế độ wifi.

              </div>
              <div className="h4">+ Access Point Mode</div>
              <div className="h4">+ Station Mode</div>
              <div className="h4">+ Both Access Point and Station</div>

              <div className="h3">Để đặt chế độ wifi, sử dụng thư viện Wifi.h và xác định chế độ wifi bằng hàm Wifi.mode()</div>

              <div className="h3">State mode</div>
              <div className="h4">khi ở Station mode, ESP32 kết nối wifi với mạng khác.Trong Bộ định tuyến cấp 1 địa chỉ IP duy nhất cho ESP32. Có thể giao tiếp với ESP bằng cách sử dụng các thiết bị (station) khác cũng được kết nối với cùng 1 mạng.Kết nối Internet thông qua Access Point.</div>
              <div className="h4">khi ở Access Point mode, ESP32 là điểm truy cập, ESP32 sẽ tạo 1 mạng wifi của chính nó và các thiết bị (station) wifi gần đó có thể kết nối với nó.Vì vậy, không cần phải kết nối với bộ định tuyến để điều khiển ESP.</div>
              <div className="h4">Khi ở Access Point & STA mode, ESP32 là điểm truy cập, ESP32 sẽ tạo 1 mạng wifi của chính nó và các thiết bị (station) wifi gần đó có thể kết nối với nó. Vì vậy, không cần phải kết nối với bộ định tuyến để điều khiển ESP.</div>
            </div>
          },
          {
            title: "Câu hỏi",
            desc: 
            <div>
              <div className="h2">Câu 1: So sánh webserver ở chế độ AP và STA</div>
              <div className="h3">
                1. Chế độ AP (Access Point):
              </div>
              <div className="h4">
                <div>Chế độ AP cho phép thiết bị tạo ra một mạng Wi-Fi riêng, giúp các thiết bị khác kết nối vào mạng này.</div>
                <div>Arduino hoạt động như một điểm truy cập Wi-Fi, các thiết bị khác có thể kết nối trực tiếp với Arduino thông qua mạng Wi-Fi được tạo ra bởi nó.</div>
                <div>Arduino sẽ chịu trách nhiệm cung cấp địa chỉ IP và cung cấp dịch vụ web cho các thiết bị kết nối.</div>
              </div>
            </div>
          },
          {
            title: "Bài tập",
            desc:
            <div>
              <a href="https://wokwi.com/projects/394217062829882369" target="_blank" className="h2">Bài tập nhóm: Bật tắt đèn thong qua webserver</a>
            </div>
          }
        ]
      },
      {
        id: 9,
        title: "MQTT",
        link: "/blogs/1/9",
        thumbnail: img_0,
        main_content: [
          {
            title: "Giao thức MQTT",
            desc:
            <div>
              <div className="h2">Giao thức MQTT là gì</div>
              <div className="h3">MQTT(Message Queuing Telemetry Transport) là một </div>
            </div>
          }
        ]
      }
    ],
  },
];

export default blogs;
