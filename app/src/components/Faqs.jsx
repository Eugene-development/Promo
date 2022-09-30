import Image from 'next/future/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'А что если мне не понравится?',
      answer:
        'Well no, but if you move your company offshore you can probably ignore it.',
    },
    {
      question: 'Где ваш офис?',
      answer: 'Absolutely, we are happy to take your money in all forms.',
    },
    {
      question: 'Можно безналом?',
      answer:
        'We only hire our customers, so subscribe for a minimum of 6 months and then let’s talk.',
    },
  ],
  [
    {
      question: 'Где посмотреть работы?',
      answer:
        'TaxPal is just a software application, ultimately your books are your responsibility.',
    },
    {
      question:
        'А что если мой бизнес не пойдёт?',
      answer:
        'Мы можем заморозить проект и позже продолжить его, когда ситуация изменится к лучшему.',
    },
    {
      question:
        'Можем ли мы оплатить один раз услугу без подписки?',
      answer:
        'Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website.',
    },
  ],
  [
    {
      question: 'Почему лендинг стоит как интернет магазин?',
      answer:
        'You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.',
    },
    {
      question: 'У вас есть партнёрская программа?',
      answer: 'In life it’s really better to never expect anything at all.',
    },
    {
      question: 'Всё буду делать я?',
      answer:
        'От вас только общение с назначенным менеджером, а остальные настройки для работы проекта сделаем мы.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Мы знаем ваши вопросы {':)'}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
