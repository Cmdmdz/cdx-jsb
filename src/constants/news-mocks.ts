export interface News {
    title: string
    content?: string
    thumbnail?: string
    contentImage?: string[]
    youtubeUrl?: string
}

export const mockNews: News[] = [
    {
        title: 'รู้เท่าทันพนันรอบตัว',
        content: `	เมื่อวันที่ 1 มีนาคม 2565 เวลา 10.00 นาฬิกา ณ โรงแรม เดอะ สุโกศล กรุงเทพมหานคร โครงการพัฒนาศักยภาพเครือข่ายเยาวชนลดปัจจัยเสี่ยง สนับสนุนโดย สำนักงานกองทุนสนับสนุนการสร้างเสริมสุขภาพ (สสส.) ร่วมกับมูลนิธิรณรงค์หยุดพนัน และสมาคมนักข่าวนักหนังสือพิมพ์แห่งประเทศไทย จัดแถลงข่าว ผลการเฝ้าระวังธุรกิจพนันออนไลน์ในช่วง “อยู่บ้าน หยุดเชื้อ เพื่อชาติ” ปี 2564 ตามมาตรการป้องกันการแพร่ระบาดโควิด-19 ในหัวข้อ “1 ปีที่พ่ายแพ้ กับการแก้ปัญหาพนันออนไลน์” พร้อมแนะนำระบบฐานข้อมูล “Just Stop Gambling” ในรูปแบบเว็บไซต์แอปพลิเคชัน แจ้งร้องเรียนและเบาะแสเกี่ยวกับการให้บริการ และการโฆษณาธุรกิจพนันออนไลน์ เพื่อส่งต่อข้อมูลให้แก่หน่วยงานที่เกี่ยวข้อง ในการดำเนินการบังคับใช้กฎหมายต่อไป
        นายสุรเชษฐ์ โพธิ์แสง รองเลขาธิการสถาบันยุวทัศน์แห่งประเทศไทย ได้นำเสนอผลการเฝ้าระวังการพนันออนไลน์จากข่าวในสื่อต่างๆ กล่าวว่า ข้อมูลในช่วงปี 2564 ที่ผ่านมา ได้เห็นปัญหาและผลกระทบจากการพนันออนไลน์ รวมถึงการพนันออฟไลน์มากขึ้น โดยเว็บพนันได้พัฒนากลยุทธ์การโฆษณาในรูปแบบใหม่ๆ และมีเว็บพนันใหม่เกิดขึ้นตลอดเวลา มีการจับกุมหรือปิดเว็บไปกว่า 2,300 เว็บไซต์ เงินหมุนเวียนกว่า 1.36 แสนล้านบาท และยังคงมีอยู่อีกกว่า 350 เว็บพนันที่ยังเปิดให้บริการอยู่ แต่ในมิติของการป้องกันยังไม่มีความชัดเจน ที่สำคัญคือการพนันก่อให้เกิดปัญหาสังคมมากมายหลายรูปแบบ โดยมีถึง 158 คดีทั่วประเทศที่เป็นข่าว มีผู้ต้องหาหรือผู้กระทำความผิดกว่า 1,500 คน ในทุกช่วงวัย หน่วยงานภาครัฐที่เกี่ยวข้องจึงควรร่วมมือกัน ควบคุมการพนันอย่างจริงจัง เพื่อป้องกันไม่ให้มีเหยื่อพนันรายใหม่เพิ่มขึ้นอีก
        ทางด้าน นายนพดล อินทร์ต๊ะ หัวหน้าสำนักนวัตกรรมเทคโนโลยีดิจิทัลและสื่อสร้างสรรค์ ผู้ร่วมพัฒนาแอปพลิเคชัน “Just Stop Gambling” กล่าวว่า แอปพลิเคชัน “Just Stop Gambling” พัฒนาขึ้นโดยนักศึกษาและอาจารย์ผู้เชี่ยวชาญ จากคณะเทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล มหาวิทยาลัยนอร์ทกรุงเทพ เป็นช่องทางให้เครือข่ายเยาวชนและประชาชน ในการช่วยกันดูแลสังคม แจ้งเรื่องร้องเรียน และเบาะแสพนันออนไลน์จากเยาวชน โดยมุ่งหวังว่าปัญหาการพนันออนไลน์จะได้รับการจัดการอย่างถูกต้องเหมาะสม จากการทำงานที่ผ่านมา พบว่าเด็กและเยาวชนต้องการเครื่องมือหรือช่องทางที่จะดูแลเพื่อนกันเอง และสะดวกใจที่จะให้ความร่วมมือกับเครือข่าย มากกว่าการแจ้งหรือติดต่อกับหน่วยงานภาครัฐ และมีความเชื่อมั่นในคณะทำงานเฉพาะกิจป้องกันและแก้ไขปัญหาการพนันออนไลน์ในเด็กและเยาวชน จึงคาดหวังว่าข้อมูลที่ได้รับแจ้งผ่านแอปพลิเคชัน จะสามารถส่งต่อและช่วยให้ผู้บังคับใช้กฎหมายสามารถดำเนินคดีกับเว็บพนันที่ทำให้เกิดปัญหาสังคมได้มากยิ่งขึ้น
    
    `,
        contentImage: [
            '/images/news-thumbnail-01.png',
            '/images/news-thumbnail-02.png',
            '/images/news-thumbnail-03.png'
        ],
        thumbnail: '/images/news-thumbnail-01.png'
    },
    {
        title: 'เผยผลสำรวจเว็บพนัน ครั้งที่ 1',
        content: `	เมื่อวันที่ 9 กรกฎาคม 2563 เวลา 10.00 นาฬิกา ณ ห้องแมนดาริน A โรงแรมแมนดาริน สามย่าน สถาบันยุวทัศน์แห่งประเทศไทย (ยท.) และภาคีเครือข่าย อาทิ สมาคมไอเซคพัฒนาผู้นำนักศึกษาระหว่างประเทศ , เครือข่ายเด็กรุ่นใหม่ไม่พนัน และเครือข่ายเพื่อนเยาวชนเพื่อการพัฒนา และสถาบันการศึกษาต่างๆ ภายใต้การสนับสนุนจากโครงการพัฒนาศักยภาพเครือข่ายเยาวชน สำนักงานกองทุนสนับสนุนการสร้างเสริมสุขภาพ (สสส.) จัดการแถลงข่าวเปิดผลการสำรวจพฤติกรรมของเด็กและเยาวชนกับการใช้สื่อออนไลน์และภัยจากพนันออนไลน์ และเวทีเสวนาในหัวข้อ "กักตัวเสี่ยงโควิด กลับเสี่ยงติดพนันออนไลน์" ซึ่งจากข้อมูลล่าสุดจากการสำรวจพบว่า สถานการณ์การแพร่ระบาดของเชื้อไวรัสโควิด-19 ทำให้มีเว็บพนันออนไลน์เพิ่มขึ้นเกือบ 1 เท่า โดยตั้งแต่ 1 ม.ค. – 15 มี.ค. 63 มีเว็บพนันจำนวน 240 เว็บไซต์ แต่ในช่วงระหว่าง 16 มี.ค. – 31 พ.ค. พบว่ามีเว็บพนันออนไลน์เกิดใหม่เพิ่มขึ้นอีกมากถึง 200 เว็บไซต์ รวมเป็น 440 เว็บไซต์`,
        contentImage: ['/images/news-thumbnail-02.png'],
        thumbnail: '/images/news-thumbnail-02.png'
    },
    {
        title: 'แถลงข่าวร่วมกับทนายรณรงค์',
        content: `	27 สิงหาคม 2563 นายรณรงค์ แก้วเพชร ประธานเครือข่ายรณรงค์ทวงคืนความยุติธรรมในสังคม พร้อมตัวแทนจากเครือข่ายเยาวชนลดปัจจัยเสี่ยง เข้ายื่นหนังสือถึง พล.ต.อ.จักรทิพย์ ชัยจินดา ผบ.ตร.และ พล.ต.อ.สุวัฒน์ แจ้งยอดสุข รองผบ.ตร และในฐานะผู้อำนวยการศูนย์ปราบปรามอาชญากรรมเทคโนโลยีสารสนเทศ สำนักงานตำรวจแห่งชาติ หรือ ศปอส.ตร. เพื่อขอให้เร่งดำเนินการปราบปรามธุรกิจพนันออนไลน์ที่พบว่าปัจจุบันขยายตัวอย่างรวดเร็ว โดยเฉพาะในช่วงสถานการณ์การแพร่ระบาดของโรคโควิด-19 นายรณรงค์ เปิดเผยว่า ปัจจุบันพบว่าในสื่อออนไลน์มีเชิญชวนเล่นการพนันออนไลน์จำนวนมาก โดยจากการเฝ้าติดตามธุรกิจชนิดนี้ พบว่ามีการทำงานเป็นเครือข่าย ซึ่งจะใช้บุคคลที่มีชื่อเสียง หรือเน็ตไอดอลทำหน้าที่ในการโฆษณา เชิญชวนโดยมีกลุ่มเป้าหมายที่เป็นเยาวชน เนื่องจากเป็นกลุ่มที่ใช้สื่อออนไลน์มากที่สุด ด้าน น.ส.กาญจนา วิจิตรบูรพา หัวหน้าสำนักสนับสนุนการลดปัจจัยเสี่ยงด้านสุขภาพ สถาบันยุวทัศน์แห่งประเทศไทย หรือ ยท. เปิดเผยว่า จากผลสำรวจพฤติกรรมของเด็กและเยาวชน จำนวนกว่า 1,089 คน เกี่ยวกับการใช้สื่อออนไลน์ พบว่า ในช่วง ‘ อยู่บ้าน หยุดเชื่อ เพื่อชาติ’ มีเว็บพนันเพิ่มขึ้นรวม 440 เว็บไซต์ รวมถึงพบว่ามีผู้ใช้เฟสบุ๊กที่เป็นเน็ตไอดอล จำนวน 167ราย และเฟสบุ๊กแฟนเพจกว่า 100 เพจ ที่รับโฆษณาให้กับเว็บพนันออนไลน์
        นายรณรงค์ กล่าวเพิ่มเติมว่า นอกจากนี้ตนเองได้รวบรวมข้อมูลเน็ตไอดอลที่โฆษณาเชิญชวน ประชาชนเข้าเล่นการพนัน พบว่ามีกว่า 200 คน โดยในจำนวนนี้มีบุคคลที่มีชื่อเสียง ชื่อย่อ เสี่ย.ป รวมอยู่ด้วย จึงนำหลักฐานทั้งหมดที่มอบให้ผบ.ตรและรองผบ.ตร.ในวันนี้ และต้องการให้ตำรวจดำเนินการปราบปรามอย่างเข้มงวด เนื่องจากการกระทำดังกล่าวเข้าข่ายความผิดพรบ.การพนัน และ พรบ.คอมพิวเตอร์ฯ`,
        contentImage: [
            '/images/news-thumbnail-03.png',
            '/images/news-thumbnail-02.png'
        ],
        thumbnail: '/images/news-thumbnail-03.png'
    },
    {
        title: 'ต้องสูญเสียอีกเท่าไหร่ กับ “การพนัน”!!! | #อย่าหาว่าน้าสอน',
        content:
            'ตัวอย่างมีมากมาย แต่ทุกวันนี้ก็ยังมีคนเชื่ออยู่ว่าการพนันทำให้รวย!!!',
        youtubeUrl:
            'https://www.youtube.com/watch?v=422rxauFGJA&pp=ygUvc3RvcCBnYW1ibGluZyDguKvguKLguLjguJTguIHguLLguKPguJ7guJnguLHguJk%3D'
    },
    {
        title: 'แบไต๋หมดเปลือก! ชีวิตโปรแกรมเมอร์เว็บพนันออนไลน์',
        content:
            'ในยุคออนไลน์แบบนี้ ผู้ใช้งานทั่วไปแทบจะหลีกเลี่ยงเว็บพนันออนไลน์ไม่พ้น มันฝังอยู่ทุกที่และแผ่กิ่งก้านสาขาไปได้อย่างรวดเร็ว ทำให้มีผู้ตกเป็นเหยื่อการพนันเพิ่มมากขึ้นอย่างหลีกเลี่ยงไม่ได้ ซึ่งเบื้องหลังวงการนี้มีความเป็นมาอย่างไรและเขามีวิธีการทำงานแบบไหน คลิปนี้ ไปแบไต๋กันให้หมดเปลือก !',
        youtubeUrl: 'https://www.youtube.com/watch?v=-F-O5outYPE'
    },
    {
        title: 'ไม่มีคำว่าสาย..ถ้าคุณอยากจะเลิก "พนันออนไลน์"',
        youtubeUrl: 'https://www.youtube.com/watch?v=6-Rt8exj8K8'
    }
]
