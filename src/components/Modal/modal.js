import React from 'react';
import ReactDom from 'react-dom';
import './modal.css';
import ImageSlider from '../Slider/imageSlider';
import { SliderData } from '../Slider/sliderData';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  height: '80%',
  width: '80%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  zIndex: 1000,
  color: 'black'
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  zIndex: 1000
}

export default function Modal({ open, children, onClose }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div className = "overlay" style={OVERLAY_STYLES} />
      <div className = "modal" style={MODAL_STYLES}>
        <div className = "modal-first">
          <ImageSlider slides={SliderData} />;
        </div>
        <div className = "modal-second">
          <div className = "modal-second-first">
            <div className = "modal-second-first-name">
              <h2>Hotel Name</h2>
              <a onClick={onClose}>Close</a>
            </div>
            <div>
              <p>City, Country</p>
            </div>
          </div>
          <div className = "modal-second-second"></div>
          <div className = "modal-second-third"></div>
          <div className = "modal-second-fourth">
            <p>Enquire</p>
            <p>Share</p>
            <p>Download</p>
          </div>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  )
}