import React from 'react';
// import rc-footer
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';

const Foot = (props) => {
  return (
    <div id="#footer">
        <Footer
            style = {{textAlign: "center", marginTop: "200px"}}
            columns={[
                {
                title: 'Link Up',
                openExternal: true,
                items: [
                        {
                            title: 'Facebook',
                            url: 'https://www.facebook.com/profile.php?id=100006921404837',
                           openExternal: true,
                        },
                        {
                            title: 'LinkedIn',
                            url: 'https://www.linkedin.com/in/ripudamanthind/',
                            openExternal: true,
                        },
                        {
                            title: 'GitHub',
                            url: 'https://github.com/ripudamansinghthind',
                            openExternal: true,
                        },
                    ],
                },
            ]}
            bottom="Business Email: ripudamansinghthind@gmail.com"
        />
        </div>
    );
}
    
export default Foot;