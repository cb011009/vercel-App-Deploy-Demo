import React, {useState} from 'react'
import './FAQs.css';


export default function FAQs() {

  const faqList = [
  {
  
    id:1,
    question: "What is a blood donation?",
    answer:"Blood donation is the process of giving blood, which can be used for transfusions or to make medications and other products.",
   
  }, 

  {
    id: 2,
    question: "How long does a blood donation take?", 
    answer:"The entire process takes about one hour and 15 minutes; the actual donation of a pint of whole blood unit takes eight to 10 minutes. However, the time varies slightly with each person depending on several factors including the donor’s health history and attendance at the blood drive.",
  }, 

  {
    id: 3,
    question: "How often can I donate blood",
    answer: "You must wait at least eight weeks (56 days) between donations of whole blood and 16 weeks (112 days) between Power Red donations. Whole blood donors can donate up to 6 times a year. Platelet apheresis donors may give every 7 days up to 24 times per year. Regulations are different for those giving blood for themselves (autologous donors).", 
  },
  
  {
    id: 4, 
    question: "Who can donate blood?",
    answer:"Usually, donors must be age 17 or older. Some states allow donation by 16-year-olds with a signed parental consent form. Donors must weigh at least 110 pounds and be in good health. Additional eligibility criteria apply.",
  },
  
  {
    id: 5,
    question: "What is the most important blood to donate?",
    answer:"O negative blood is the highest because it is used most often during emergencies. The need for O+ is high because it is the most frequently occurring blood type (37% of the population). The universal red cell donor has Type O negative blood. The universal plasma donor has Type AB blood.",  
  },
  
  { 
    id: 6, 
    question: "What are the side effects of donating blood?", 
    answer:"The side effects of donating blood include nausea and dizziness and fainting in some cases. You may develop a raised bump or experience continued bleeding and bruising at the needle site too. Some people might experience pain and physical weakness after donating blood.",
  },
 
  {
    id: 7, 
    question: "What is the importance of blood donation?",  
    answer: "Safe blood saves lives. Blood is needed by women with complications during pregnancy and childbirth, children with severe anaemia, often resulting from malaria or malnutrition, accident victims and surgical and cancer patients.",  
  },
  
 ]


 const [selectedIndex, setSelectedIndex] = useState(null);
 const handleFaqClick = (faqIndex) => {
 if (faqIndex === selectedIndex) {
 setSelectedIndex(null);
 } else {
 setSelectedIndex(faqIndex);
}
 };


 return (
<>
<div className='FAQContainer'>
        <div className='FAQColumn'>
          {faqList.slice(0, Math.ceil(faqList.length / 2)).map((faq) => (
            <div className='FAQRow' key={faq.id}>
              <button className='FAQBtn' onClick={() => handleFaqClick(faq.id)}>
                {faq.question} <span>click</span>
              </button>
              <div className='faqAnswer'>{selectedIndex === faq.id && <p id='faqP'>{faq.answer}</p>}</div>
            </div>
          ))}
        </div>
        <div className='FAQColumn'>
          {faqList.slice(Math.ceil(faqList.length / 2)).map((faq) => (
            <div className='FAQRow' key={faq.id}>
              <button className='FAQBtn' onClick={() => handleFaqClick(faq.id)}>
                {faq.question} <span>click</span>
              </button>
              <div className='faqAnswer'>{selectedIndex === faq.id && <p id='faqP'>{faq.answer}</p>}</div>
            </div>
          ))}
        </div>
      </div>
  

{/*<div className='FAQContainer'> 
{faqList.map((faq) => (
 <div className='FAQRow'key={faq.id}>
 <button className='FAQBtn' onClick={() => handleFaqClick(faq.id)}>{faq.question} <span>click</span></button>
<div className='faqAnswer'>{selectedIndex === faq.id && <p id='faqP'>{faq.answer}</p>}</div>
</div>
 ))}
</div>*/}
 </>
 )
}
