import nodemailer from 'nodemailer';


export default async (req, res) => {
  require('dotenv').config()
  const { name, email, phone, address, subdistrict, district, province, zipCode } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.password,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: 'ntimeproductions@gmail.com',
      subject: `Land Leasing Info from ${name}`,
      html: `
      <html>
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <title>Remedy Export Land Leasing</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <style>
            .ReadMsgBody {width: 100%; background-color: #ffffff;}
            .ExternalClass {width: 100%; background-color: #ffffff;}
            @-ms-viewport { 
                width: device-width; 
            }
          </style>
        </head>
        <body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" style="background: #e7e7e7; width: 100%; height: 100%; margin: 0; padding: 0;">
          <div id="mailsub">
            <center class="wrapper" style="table-layout: fixed; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; padding: 0; margin: 0 auto; width: 100%; max-width: 960px;">
                  <div class="webkit">
                <table cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="padding: 0; margin: 0 auto; width: 100%; max-width: 960px;">
                  <tbody>
                    <tr>
                      <td align="center">
                        <table id="intro" cellpadding="0" cellspacing="0" border="0" bgcolor="#4F6331" align="center" style="width: 100%; padding: 0; margin: 0; background-image: url(https://cdn.pixabay.com/photo/2016/11/14/02/51/rice-plantation-1822444_960_720.jpg?raw=true); background-size: auto 102%; background-position: center center; background-repeat: no-repeat; background-color: #080e02">
                          <tbody >
                            <tr><td colspan="3" height="20"></td></tr>
                            <tr>
                              <td width="330" style="width: 33%;"></td>
                              <td width="300" style="width: 30%;" align="center">
                                <a href="#" target="_blank" border="0" style="border: none; display: block; outline: none; text-decoration: none; line-height: 60px; height: 60px; color: #ffffff; font-family: Verdana, Geneva, sans-serif;  -webkit-text-size-adjust:none;">
                                  <img src="/images/Remedy_Export_Logo.png" alt="Remedy Export" width="100" height="100" border="0" style="border: none; display: block; -ms-interpolation-mode: bicubic;">
                                </a>
                              </td>
                            </tr>
                            <tr><td colspan="3" height="100"></td></tr>
                            <tr>
                              <td colspan="3" height="60" align="center">
                                <div border="0" style="border: none; line-height: 60px; color: #ffffff; font-family: Verdana, Geneva, sans-serif; font-size: 52px; text-transform: uppercase; font-weight: bolder;">Land Leasing</div>
                              </td>
                            </tr>
                            <tr>
                              <td colspan="3" height="20" valign="bottom" align="center">
                                <img src="https://github.com/lime7/responsive-html-template/blob/master/index/line-1.png?raw=true" alt="line" border="0" width="464" height="5" style="border: none; outline: none; max-width: 464px; width: 100%; -ms-interpolation-mode: bicubic;" >
                              </td>
                            </tr>
                            <tr>
                              <td colspan="3">
                                <table cellpadding="0" cellspacing="0" border="0" align="center" style="padding: 0; margin: 0; width: 100%;">
                                  <tbody>
                                    <tr>
                                      <td width="90" style="width: 9%;"></td>
                                      <td align="center">
                                        <div border="0" style="border: none; height: 60px;">
                                          <p style="font-size: 18px; line-height: 24px; font-family: Verdana, Geneva, sans-serif; color: #ffffff; text-align: center; mso-table-lspace:0;mso-table-rspace:0;">
                                            This is an email from the Remedy Export landing page with info of those interested in our program!
                                          </p>
                                        </div>
                                      </td>
                                      <td width="90" style="width: 9%;"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr><td colspan="3" height="160"></td></tr>
                            <tr>
                              <td width="330"></td>
                              <td width="300" align="center" height="52">
                                <div style="background-image: url(https://github.com/lime7/responsive-html-template/blob/master/index/intro__btn.png?raw=true); background-size: 100% 100%; background-position: center center; width: 225px;">
                                </div>
                              </td>
                              <td width="330"></td>
                            </tr>
                            <tr><td colspan="3" height="85"></td></tr>
                          </tbody>
                        </table>
                        <table id="icon__article" class="device" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" align="center" style="width: 100%; padding: 0; margin: 0; background-color: #ffffff">
                          <tbody>								
                            <tr>
                              <td align="center">
                                <div style="display: inline-block;">
                                  <table width="240" align="left" cellpadding="0" cellspacing="0" border="0" style="padding: 0; margin: 0; mso-table-lspace:0pt; mso-table-rspace:0pt;"  class="article">
                                  <tbody>
                                    <tr> <td colspan="3" height="40"></td> </tr>
                                    <tr>
                                      <td width="80" style="width: 8%;"></td>
                                      <td align="center">
                                        <h3 border="0" style="border: none; line-height: 14px; color: #212121; font-family: Verdana, Geneva, sans-serif; font-size: 16px; text-transform: uppercase; font-weight: normal; overflow: hidden; margin:17px 0 0px 0;">
                                          Name
                                        </h3>
                                        <p style="line-height: 20px; color: #727272; font-family: Verdana, Geneva, sans-serif; font-size: 16px; text-align: center; overflow: hidden; margin: 10px 0; mso-table-lspace:0;mso-table-rspace:0;"> 
                                          ${name}
                                        </p>
                                      </td>
                                      <td width="80" style="width: 8%;"></td>
                                    </tr>
                                    <tr><td colspan="3" height="10"></td></tr>					
                                    <tr>
                                      <td colspan="3" height="5" valign="top" align="center">
                                        <img src="https://github.com/lime7/responsive-html-template/blob/master/index/line-2.png?raw=true" alt="line" border="0" width="960" height="5" style="border: none; outline: none; max-width: 960px; width: 100%; -ms-interpolation-mode: bicubic;" >
                                      </td>
                                    </tr>						
                                  </tbody>
                                  </table>
                                </div>
                                <div style="display: inline-block; margin-left: -4px;">
                                  <table width="240" align="left" cellpadding="0" cellspacing="0" border="0" style="padding: 0; margin: 0; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="article">
                                  <tbody>
                                    <tr> <td colspan="3" height="40"></td> </tr>
                                    <tr>
                                      <td width="80" style="width: 8%;"></td>
                                      <td align="center">
                                        <h3 border="0" style="border: none; line-height: 14px; color: #212121; font-family: Verdana, Geneva, sans-serif; font-size: 16px; text-transform: uppercase; font-weight: normal; overflow: hidden; margin:17px 0 0px 0;">
                                          Email
                                        </h3>
                                        <p style="line-height: 20px; color: #727272; font-family: Verdana, Geneva, sans-serif; font-size: 16px; text-align: center; overflow: hidden; margin: 10px 0; mso-table-lspace:0;mso-table-rspace:0;"> 
                                          ${email}
                                        </p>
                                      </td>
                                      <td width="80" style="width: 8%;"></td>
                                    </tr>
                                    <tr><td colspan="3" height="10"></td></tr>					
                                    <tr>
                                      <td colspan="3" height="5" valign="top" align="center">
                                        <img src="https://github.com/lime7/responsive-html-template/blob/master/index/line-2.png?raw=true" alt="line" border="0" width="960" height="5" style="border: none; outline: none; max-width: 960px; width: 100%; -ms-interpolation-mode: bicubic;" >
                                      </td>
                                    </tr>					
                                  </tbody>
                                  </table>
                                </div>
                                <div style="display: inline-block; margin-left: -4px;">
                                  <table width="240" align="left" cellpadding="0" cellspacing="0" border="0" style="padding: 0; margin: 0; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="article">
                                  <tbody>
                                    <tr> <td colspan="3" height="40"></td> </tr>
                                    <tr>
                                      <td width="80" style="width: 8%;"></td>
                                      <td align="center">
                                        <h3 border="0" style="border: none; line-height: 14px; color: #212121; font-family: Verdana, Geneva, sans-serif; font-size: 16px; text-transform: uppercase; font-weight: normal; overflow: hidden; margin:17px 0 0px 0;">
                                          Phone Number
                                        </h3>
                                        <p style="line-height: 20px; color: #727272; font-family: Verdana, Geneva, sans-serif; font-size: 16px; text-align: center; overflow: hidden; margin: 10px 0; mso-table-lspace:0;mso-table-rspace:0;"> 
                                          ${phone}
                                        </p>
                                      </td>
                                      <td width="80" style="width: 8%;"></td>
                                    </tr>
                                    <tr><td colspan="3" height="10"></td></tr>					
                                    <tr>
                                      <td colspan="3" height="5" valign="top" align="center">
                                        <img src="https://github.com/lime7/responsive-html-template/blob/master/index/line-2.png?raw=true" alt="line" border="0" width="960" height="5" style="border: none; outline: none; max-width: 960px; width: 100%; -ms-interpolation-mode: bicubic;" >
                                      </td>
                                    </tr>					
                                  </tbody>
                                  </table>
                                </div>									
                              </td>
                            </tr>
                            <tr> <td colspan="5" height="40"></td> </tr>
                          </tbody>
                        </table>						
                        <table id="icon__article" class="device" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" align="center" style="width: 100%; padding: 0; margin: 0; background-color: #ffffff">
                          <tbody>								
                            <tr>
                              <td align="center">
                                <div style="display: inline-block;">
                                  <table width="98%" align="center" cellpadding="0" cellspacing="0" border="0" style="padding: 0; margin: 0; mso-table-lspace:0pt; mso-table-rspace:0pt;"  class="article">
                                  <tbody>
                                    <tr> <td colspan="3" height="40"></td> </tr>
                                    <tr>
                                      <td width="80" style="width: 8%;"></td>
                                      <td align="center">
                                        <h3 border="0" style="border: none; line-height: 14px; color: #212121; font-family: Verdana, Geneva, sans-serif; font-size: 16px; text-transform: uppercase; font-weight: normal; overflow: hidden; margin:17px 0 0px 0;">Address
                                        </h3>
                                        <p style="line-height: 20px; color: #727272; font-family: Verdana, Geneva, sans-serif; font-size: 16px; text-align: center; overflow: hidden; margin: 10px 0; mso-table-lspace:0;mso-table-rspace:0;">
                                          <b>Address:</b> ${address}<br>
                                          <b>Subdistrict:</b> ${subdistrict}<br>
                                          <b>District:</b> ${district}<br>
                                          <b>Province:</b> ${province}<br>
                                          <b>Zip Code:</b> ${zipCode}
                                        </p>
                                      </td>
                                      <td width="80" style="width: 8%;"></td>
                                    </tr>
                                    <tr><td colspan="3" height="10"></td></tr>					
                                    <tr>
                                      <td colspan="3" height="5" valign="top" align="center">
                                        <img src="https://github.com/lime7/responsive-html-template/blob/master/index/line-2.png?raw=true" alt="line" border="0" width="960" height="5" style="border: none; outline: none; max-width: 960px; width: 100%; -ms-interpolation-mode: bicubic;" >
                                      </td>
                                    </tr>						
                                  </tbody>
                                  </table>
                                </div>						
                              </td>
                            </tr>
                            <tr> <td colspan="5" height="40"></td> </tr>
                          </tbody>
                        </table>
                        <table id="news__article" cellpadding="0" cellspacing="0" border="0" bgcolor="#008000ff" align="center" style="width: 100%; padding: 0; margin: 0; background-color: #008000ff">
                          <tbody>
                            <tr><td colspan="3" height="23"></td></tr>
                            <tr>
                              <td align="center">
                                <div border="0" style="border: none; line-height: 14px; color: #ffffff; font-family: Verdana, Geneva, sans-serif; font-size: 16px;">
                                  2022 © Remedy Export
                                </div>
                              </td>
                            </tr>
                            <tr><td colspan="3" height="23"></td></tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </center>
          </div>
        </body>
      </html>
      `,
    });

    console.log('Message Sent');
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
}