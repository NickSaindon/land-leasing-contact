import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="th">
        <Head>
          <title>การแก้ไขการเช่าที่ดินเพื่อการส่งออก</title>
          <meta name="description" content="โครงการเช่าที่ดิน 10 ปี เพื่อทำสวนกระท่อมในประเทศไทย  เจ้าของที่ดินตั้งแต่ 5 ไร่ขึ้นไปและอาจมีแหล่งน้ำ"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument