import {
  FacebookIcon, FacebookShareButton,
  FacebookMessengerIcon, FacebookMessengerShareButton,
  LinkedinIcon, LinkedinShareButton,
  TelegramIcon, TelegramShareButton,
  TwitterIcon, TwitterShareButton,
  WhatsappIcon, WhatsappShareButton
} from 'react-share';
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import MainBreadcrumb from '../../components/MainBreadcrumb';

const EntryPage = ({ entry, breadcrumb }) => {

  console.log(entry)

  const [text, setText] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    const getText = async () => {
      const filePath = require(`../../markdown/${entry.file}`);
      const mdText = await fetch(filePath).then(response => response.text());
      setText(mdText);
    }
    const getImagePath = async () => {
      const filePath = require(`../../markdown/${entry.image}`);
      // const mdImage = await fetch(filePath).then( response => response.text() );
      setImage(filePath);
    }
    getText();
    getImagePath();
  }, [entry])

  const breadcrumbsList = [
    breadcrumb,
    <span className='breadcrumb-current'>{text.split('\n')[0].substring(2)}</span>
  ]

  return (
    <div className='box markdown-page'>
      <nav className='level mb-3'>
        <div className='level-left'>
          <MainBreadcrumb breadCrumbsList={breadcrumbsList} />
        </div>
        <div className='level is-mobile share-buttons'>
          <FacebookShareButton className='level-item' children={<FacebookIcon bgStyle={{ fill: "white" }} iconFillColor={'#d44000'} size={25} round={true}></FacebookIcon>} url={window.location.href}></FacebookShareButton>
          <TwitterShareButton className='level-item' children={<TwitterIcon bgStyle={{ fill: "white" }} iconFillColor={'#d44000'} size={25} round={true}></TwitterIcon>} url={window.location.href}></TwitterShareButton>
          <LinkedinShareButton className='level-item' children={<LinkedinIcon bgStyle={{ fill: "white" }} iconFillColor={'#d44000'} size={25} round={true}></LinkedinIcon>} url={window.location.href}></LinkedinShareButton>
          <WhatsappShareButton className='level-item' children={<WhatsappIcon bgStyle={{ fill: "white" }} iconFillColor={'#d44000'} size={25} round={true}></WhatsappIcon>} url={window.location.href}></WhatsappShareButton>
          <FacebookMessengerShareButton className='level-item' children={<FacebookMessengerIcon bgStyle={{ fill: "white" }} iconFillColor={'#d44000'} size={25} round={true}></FacebookMessengerIcon>} url={window.location.href}></FacebookMessengerShareButton>
          <TelegramShareButton className='level-item' children={<TelegramIcon bgStyle={{ fill: "white" }} iconFillColor={'#d44000'} size={25} round={true}></TelegramIcon>} url={window.location.href}></TelegramShareButton>
        </div>
      </nav>
      <div className='box has-background-white'>
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{text}</ReactMarkdown>
        <figure className='image entry-body-img'>
          <img src={image} alt='' />
        </figure>
      </div>
    </div>
  )
}

export default EntryPage