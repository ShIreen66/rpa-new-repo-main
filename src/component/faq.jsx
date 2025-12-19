import React, { useState, useRef, useEffect } from "react";
import "../component/main.css";

const faqData = [
    {
        question: "What Is TrueTenant, And How Does It Work?",
        answer:
            "TrueTenant is a secure verification platform that helps renters build a trusted profile. You upload your details once, we verify your identity, income, and rental history, and then create a score landlords and tenants can rely on. Your verified profile can be used to apply for multiple rentals instantly.",
    },
    {
        question: "Who Can Use This Platform?",
        answer: "Any renter who wants a verified rental profile can use TrueTenant.",
    },
    {
        question: "What Documents Do I Need To Get Verified?",
        answer: "You need identity proof, income proof, and rental history documents.",
    },
    {
        question: "How Do I Know Which Rentals I’m Eligible For?",
        answer:
            "Once verified, our platform will show you rentals that match your profile and preferences.",
    },
    {
        question: "Do I Need To Upload More Than One Document?",
        answer: "You can upload multiple documents, but one verified document is enough to start.",
    },
    {
        question: "How Long Does Verification Take?",
        answer: "Verification usually takes 1-3 business days depending on document review.",
    },
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const contentRefs = useRef([]);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        contentRefs.current.forEach((el, i) => {
            if (el) {
                el.style.maxHeight = activeIndex === i ? el.scrollHeight + "px" : "0px";
            }
        });
    }, [activeIndex]);

    return (
        <section className="faq-section py-5">
            <div className="container">
                <div className="row g-4 align-items-start">
                    {/* Left card */}
                    <div className="col-lg-5 col-md-6 col-12 sticky-animation">
                        <h2 className="mb-3">Your Questions Answered</h2>
                        <p className="text-muted mb-4">
                            Here are some most common questions
                        </p>
                    </div>

                    <div className="col-lg-7 col-md-6 col-12">

                        <div className="faq-list">
                            {faqData.map((item, index) => (
                                <div
                                    className={`faq-item p-3 mb-3 rounded-3 ${activeIndex === index ? "active" : ""
                                        }`}
                                    key={index}
                                >
                                    <div
                                        className="faq-question d-flex justify-content-between align-items-center"
                                        onClick={() => toggleFAQ(index)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <h5 className="mb-0">{item.question}</h5>
                                        <span>{activeIndex === index ? "−" : "+"}</span>
                                    </div>
                                    <div
                                        className="faq-answer-wrapper"
                                        ref={(el) => (contentRefs.current[index] = el)}
                                    >
                                        <div className="faq-answer">{item.answer}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-6 col-12 sticky-animation">
                        <div className="faq-contact-card p-4 rounded-4">
                            <h4 className="mb-3">Still Have Questions?</h4>
                            <div className="w-100 d-flex justify-content-end">
                                <button className="btn-primary ml-auto" style={{ background: '#fff', color: '#000', borderColor: '#fff' }}>Contact Us <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M0.75 13.25L13.25 0.75M13.25 0.75H3.875M13.25 0.75V10.125" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
