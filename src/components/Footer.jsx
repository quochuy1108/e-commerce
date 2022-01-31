import {Link} from 'react-router-dom'
import logo from '../assets/images/Logo-2.png'

const Footer = () => {

    const footerAboutLinks = [
        {
            display: "Giới thiệu",
            path: "/about"
        },
        {
            display: "Liên hệ",
            path: "/about"
        },
        {
            display: "Tuyển dụng",
            path: "/about"
        },
        {
            display: "Tin tức",
            path: "/about"
        },
        {
            display: "Hệ thống cửa hàng",
            path: "/about"
        }
    ]
    
    const footerCustomerLinks = [
        {
            display: "Chính sách đổi trả",
            path: "/about"
        },
        {
            display: "Chính sách bảo hành",
            path: "/about"
        },
        {
            display: "Chính sách hoàn tiền",
            path: "/about"
        }
    ]

    return (
        <div className="footer">
            <div className="footer__container container">
                <div className="footer__section">
                    <div className="footer__title">Tổng đài hỗ trợ</div>
                    <div className="footer__content">
                            <p>
                                Liên hệ đặt hàng <strong>0123456789</strong>
                            </p>
                            <p>
                                Thắc mắc đơn hàng <strong>0123456789</strong>
                            </p>
                            <p>
                                Góp ý, khiếu nại <strong>0123456789</strong>
                            </p>
                    </div>
                </div>
{/*     1 */}
                <div className="footer__section">
                    <div className="footer__title">Về Yolo</div>
                    <div className="footer__content">
                           {footerAboutLinks.map((data,index)=>{
                               return <p key={index}>
                                   <Link to={data.path}>{data.display}</Link>

                               </p>
                           })}
                    </div>
                </div>
{/*     2 */}
                <div className="footer__section">
                    <div className="footer__title">Chăm sóc khách hàng</div>
                    <div className="footer__content">
                    {footerCustomerLinks.map((data,index)=>{
                               return <p key={index}>
                                   <Link to={data.path}>{data.display}</Link>

                               </p>
                           })}
                    </div>
                </div>
{/*     3 */}
                <div className="footer__section">
                    <div className="footer__title footer__section-logo">
                        <Link to='/'><img src={logo} alt="logo" /></Link>
                    </div>
                    <p>Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng triệu người tiêu dùng Việt. Hãy cùng Yolo hướng đến một cuộc sống năng động, tích cực hơn.</p>
                </div>
{/*     4 */}

            </div>
        </div>
    )
}

export default Footer
