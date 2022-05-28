import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Controller, useForm } from 'react-hook-form';
import NumberFormat from "react-number-format";

export default function Home() {
  const { handleSubmit, control, formState: { errors }, reset } = useForm();

  async function onSubmitForm(values) {
    let config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    };

    try {
      const response = await axios(config);
      console.log(response);
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="landing-container">
      <header className="masthead">
        <div className="container">
            <div className="masthead-subheading">
            <Image src="/images/Remedy_Export_Logo.png" className="d-block w-100" width={200} height={200} alt="..." />

            </div>
            <div className="masthead-heading text-uppercase">บริษัท เรมิดี้ เอ๊กซ์ปอร์ตส จำกัด</div>
            <Link href="#contactForm" passHref>
              <a className="btn btn-primary btn-xl text-uppercase">ติดต่อ</a>
            </Link>
        </div>
      </header>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <div className="wrapper">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="contact-wrap">
                      <h3 className="mb-4 text-center">โครงการให้เช่าที่ดิน</h3>
                      <p>
                        บริษัท เรเมดี้ เอ็กซ์ปอร์ต จำกัด เปิดโครงการเช่าที่ดินปลูกกระท่อม 10,000 ไร่ทั่วประเทศสำหรับทำกระท่อม ข้อกำหนดขั้นต่ำคือ 5 ไร่ขึ้นไปเพื่อให้เจ้าของที่ดินมีคุณสมบัติตามโครงการ สัญญาเช่า 10 ปี พร้อมเอกสารกรรมสิทธิ์ที่ดิน รับเช่าเป็นกระท่อมสดกิโลกรัมละ 50 บาท เป็นระยะเวลา 10 ปี 12 เดือน หลังปลูก เมื่อสิ้นสุดสัญญา บริษัท เรเมดี เอ็กซ์ปอร์ตส์ จำกัด จะมอบกระท่อมให้แก่เจ้าของที่ดิน โดยเจ้าของจะจัดการค่าดำเนินการทั้งหมดของกระท่อมหลังสิ้นสุดสัญญา เจ้าของที่ดินขอสงวนสิทธิ์ในการขายกระท่อมให้กับ บริษัท เรมิดี้ เอ๊กซ์ปอร์ตส จำกัด. ในราคากิโลกรัมละ 150 บาท หลังจากหมดสัญญาในเบื้องต้น หากสนใจ โปรดระบุข้อมูลติดต่อด้านล่าง ขอบคุณค่ะ
                      </p>
                      <form onSubmit={handleSubmit(onSubmitForm)} id="contactForm" name="contactForm" className="contactForm" noValidate>
                        <div className="row gy-3">
                          <div className="col-md-12">
                            <div className="form-group">
                              <Controller
                                name="name"
                                control={control}
                                defaultValue=""
                                rules={{
                                  required: true,
                                  minLength: 2,
                                  pattern: /^[a-zA-Z\s]*$/,
                                }}
                                render={({ field }) => (
                                  <input 
                                    type="text" 
                                    className={`form-control form-control-lg ${errors.name ? 'is-invalid' : ''}`}
                                    id="name" 
                                    placeholder="ชื่อ" 
                                    {...field}
                                  />
                                )}
                              />
                              <div className="invalid-feedback">
                                {
                                  errors.name
                                    ? errors.name.type === 'minLength'
                                      ? 'ชื่อต้องยาวเกิน 1 ตัวอักษร'
                                        ? errors.name.type === 'pattern'
                                      : 'ต้องระบุชื่อ'
                                        : 'No numbers or special characters allowed'
                                    : ''
                                }
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                rules={{
                                  required: true,
                                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                }}
                                render={({ field }) => (
                                  <input 
                                    type="email" 
                                    className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
                                    id="email" 
                                    placeholder="อีเมล" 
                                    {...field}
                                  />
                                )}
                              />
                              <div className="invalid-feedback">
                                {errors.email
                                    ? errors.email.type === 'pattern'
                                        ? 'อีเมลไม่ถูกต้อง'
                                        : 'จำเป็นต้องใช้อีเมล'
                                    : ''
                                }
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <Controller 
                                name="phone"
                                control={control}
                                rules={{
                                  required: true,
                                  pattern: /^\(?\b[0-9]{3}\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}\b$/
                                  ,
                                }}
                                render={({ field: {onChange, name, value} }) => (
                                  <NumberFormat
                                    format="(###) ###-####"
                                    name={name}
                                    className={`form-control form-control-lg ${errors.phone ? 'is-invalid' : ''}`}
                                    value={value}
                                    id="phone" 
                                    placeholder="หมายเลขโทรศัพท์" 
                                    onChange={onChange}
                                  />
                                )}
                              />
                              <div className="invalid-feedback">
                                  {errors.phone
                                        ? errors.phone.type === 'pattern'
                                          ? 'เบอร์โทรไม่ครบ'
                                          : 'ต้องระบุหมายเลขโทรศัพท์'
                                        : ''
                                  }
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <Controller
                                name="address"
                                control={control}
                                defaultValue=""
                                rules={{
                                  required: true,
                                  minLength: 3,
                                  pattern: /^[\w ]*[^\W_][\w ]*$/
                                }}
                                render={({ field }) => (
                                  <input 
                                    type="text" 
                                    className={`form-control form-control-lg ${errors.address ? 'is-invalid' : ''}`}
                                    id="address" 
                                    placeholder="ที่อยู่" 
                                    {...field}
                                  />
                                )}
                              />
                              <div className="invalid-feedback">
                                {
                                  errors.address
                                    ? errors.address.type === 'minLength'
                                      ? 'ที่อยู่ต้องยาวเกิน 2 ตัวอักษร'
                                      : 'ต้องระบุที่อยู่'
                                    : ''
                                }
                              </div>                           
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <Controller
                                name="subdistrict"
                                control={control}
                                defaultValue=""
                                rules={{
                                  required: true,
                                  minLength: 3,
                                }}
                                render={({ field }) => (
                                  <input 
                                    type="text" 
                                    className={`form-control form-control-lg ${errors.subdistrict ? 'is-invalid' : ''}`}
                                    id="subdistrict" 
                                    placeholder="ตำบล" 
                                    {...field}
                                  />
                                )}
                              />
                              <div className="invalid-feedback">
                                {
                                  errors.subdistrict
                                    ? errors.subdistrict.type === 'minLength'
                                      ? 'ตำบลต้องยาวเกิน 2 ตัวอักษร'
                                      : 'ต้องมีตำบล'
                                    : ''
                                }
                              </div>                              
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <Controller
                                name="district"
                                control={control}
                                defaultValue=""
                                rules={{
                                  required: true,
                                  minLength: 2,
                                }}
                                render={({ field }) => (
                                  <input 
                                    type="text" 
                                    className={`form-control form-control-lg ${errors.district ? 'is-invalid' : ''}`}
                                    id="district" 
                                    placeholder="อำเภอ" 
                                    {...field}
                                  />
                                )}
                              />
                              <div className="invalid-feedback">
                                {
                                  errors.district
                                    ? errors.district.type === 'minLength'
                                      ? 'อำเภอต้องยาวเกิน 2 ตัวอักษร'
                                      : 'อำเภอเป็นสิ่งจำเป็น'
                                    : ''
                                }
                              </div>                              
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <Controller
                                name="province"
                                control={control}
                                defaultValue=""
                                rules={{
                                  required: true,
                                  minLength: 2,
                                }}
                                render={({ field }) => (
                                  <input 
                                    type="text" 
                                    className={`form-control form-control-lg ${errors.province ? 'is-invalid' : ''}`}
                                    id="province" 
                                    placeholder="จังหวัด" 
                                    {...field}
                                  />
                                )}
                              />
                              <div className="invalid-feedback">
                                {
                                  errors.province
                                    ? errors.province.type === 'minLength'
                                      ? 'จังหวัดต้องยาวเกิน 2 ตัวอักษร'
                                      : 'จังหวัด เป็นสิ่งจำเป็น'
                                    : ''
                                }
                              </div>                              
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <Controller
                                name="zipCode"
                                control={control}
                                defaultValue=""
                                rules={{
                                  required: true,
                                  minLength: 5,
                                }}
                                render={({ field }) => (
                                  <input 
                                    type="text" 
                                    className={`form-control form-control-lg ${errors.zipCode ? 'is-invalid' : ''}`}
                                    id="zipCode" 
                                    placeholder="รหัสไปรษณีย์" 
                                    {...field}
                                  />
                                )}
                              />
                              <div className="invalid-feedback">
                                {
                                  errors.zipCode
                                    ? errors.zipCode.type === 'minLength'
                                      ? 'รหัสไปรษณีย์ต้องมีมากกว่า 5 หมายเลข'
                                      : 'รหัสไปรษณีย์เป็นสิ่งจำเป็น'
                                    : ''
                                }
                              </div>                            
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <button type="submit" className="btn btn-primary">
                                ส่งข้อความ
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-primary">
        <div className="container">
        <div className="row justify-content-center">
          <div className="col text-center">
            <h4>กนกวรรณ/Aon Kanokwan</h4>
            <p><b>Email:</b> aonka31@gmail.com</p>
            <p><b>Line ID:</b> aonka88</p>
            <p><b>Phone #:</b> 092 338 2821</p>
          </div>
          <div className="col text-center">
            <h4>Chris Saindon</h4>
            <p><b>Email:</b> csaindon35@gmail.com</p>
            <p><b>WhatsApp:</b> +66 98 446 0028</p>
            <p><b>Phone #:</b> 098 446 0028</p>
          </div>
        </div>
        </div>
      </footer>
      <div className="copy-right bg-secondary">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col text-center">
              <p>© 2022 บริษัท เรมิดี้ เอ๊กซ์ปอร์ตส จำกัด</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
