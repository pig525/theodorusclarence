import clsx from 'clsx';
import * as React from 'react';
import useLoaded from '@/hooks/useLoaded';
import Accent from '@/components/Accent';
import CloudinaryImg from '@/components/images/CloudinaryImg';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import TechStack from '@/components/TechStack';
import Image from 'next/image';

import MyPhoto from '../components/images/Myphoto.jpg';
export default function AboutPage() {
  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo
        templateTitle='About'
        description='Clarence is a front-end developer that started learning in May 2020. He write blogs about his approach and mental model on understanding topics in front-end development.'
      />

      <main>
        <section className={clsx(isLoaded && 'fade-in-start')}>
          <div className='layout pt-20'>
            <h2 data-fade='0'>About</h2>
            <h1 className='mt-1' data-fade='1'>
              <Accent>Victor Raynor</Accent>
            </h1>
            <div className='mt-4' data-fade='2'>
              <div className='float-right ml-6 w-40 overflow-hidden rounded shadow dark:shadow-none md:w-72'>
                <div
                  className='jsx-2793959334 img-blur'
                  style={{
                    position: 'relative',
                    height: 0,
                    paddingTop: '113%',
                    // cursor: 'zoom-in',
                  }}
                >
                  <div className='jsx-2793959334 absolute left-0 top-0'>
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'inline-block',
                        overflow: 'hidden',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: 'relative',
                        maxWidth: '100',
                      }}
                    >
                      <Image
                        alt='Photo of me looking really professional and definitely can impress your boss'
                        title=' '
                        src={MyPhoto}
                        decoding='async'
                        data-nimg='intrinsic'
                        style={{
                          position: 'absolute',
                          inset: '0px',
                          boxSizing: 'border-box',
                          padding: 0,
                          border: 'none',
                          margin: 'auto',
                          display: 'block',
                          width: 0,
                          height: '0px',
                          minWidth: '100%',
                          maxWidth: '100%',
                          minHeight: '100%',
                          maxHeight: '100%',
                          visibility: 'visible',
                        }}
                        data-xblocker='passed'
                      />
                    </span>
                  </div>
                </div>
              </div>

              <article className='prose dark:prose-invert'>
                <p data-fade='3'>
                  Hello! I'm Victor. I started learning web development in May
                  2020, which is the start of the pandemic. I have nothing much
                  to do so I decided to learn web development from a udemy
                  course, then started to explore more about web development
                  especially frontend development.
                </p>
                <p data-fade='4'>
                  There are a lot of things and technologies to learn in
                  frontend development and I am motivated to learn as much as
                  possible. I enjoy learning something new and getting feedback
                  to make myself better and improve.
                </p>
                <p data-fade='5'>
                  In this website I will be writing some blogs and showcase my
                  projects. I believe that writing what I have learned is the
                  best way to remember things, and I can share my knowledge
                  along the way. So do contact me and I will be very happy to
                  help!
                </p>
              </article>
              <h3 className='h4 mt-4' data-fade='6'>
                What I'm up to?
              </h3>
              <article className='prose mt-2 dark:prose-invert' data-fade='7'>
                <ul>
                  <li>
                    I'm a full-stack engineer while working remotely from
                    Jakarta, Indonesia
                  </li>
                  <li>I'm a mentor! I do revision-style mentorship</li>
                </ul>
              </article>

              <h3 className='mt-12' data-fade='8'>
                Tech Stack
              </h3>
              <figure className='mt-2' data-fade='9'>
                <TechStack />
              </figure>
            </div>
          </div>
        </section>

        <section>
          <div className='layout mt-16'>
            <h2>Contact</h2>
            <article className='prose mt-4 dark:prose-invert'>
              <p>
                Do contact me if you need my opinion about web development,
                especially frontend works. I’ll be happy to help! (find my email
                in the footer)
              </p>
            </article>
          </div>
        </section>

        <section id='uses'>
          <div className='layout mt-16'>
            <h2>Uses</h2>
            <CloudinaryImg
              className='mt-8'
              publicId='theodorusclarence/about/setup_3_cropped'
              width={2000}
              height={1125}
              alt='Photo of my desk setup'
            />
            <article className='prose mt-4 dark:prose-invert'>
              <ul>
                <li>
                  MacBook Pro (14" M3 Pro 2023, 36GB, 1TB) <b>primary</b>
                </li>
                <li>MacBook Pro (13" M1 2020, 16GB, 1TB)</li>
                <li>LG UltraFine™ 4K 32 Inch LG (32UN880-B)</li>
                <li>Keychron K2v2</li>
                <li>Logitech MX Master 3s</li>
                <li>Kindle Paperwhite (10th Generation)</li>
                <li>Nintendo Switch OLED</li>
                <li>Stramm Bruno Standing Desk 160x80</li>
                <li>Pexio Jervis Ergonomic Chair</li>
                <li>Press Play Desk Shelf</li>
                <li>Mi Computer Monitor Light Bar</li>
                <li>Creative Pebble V3</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}
