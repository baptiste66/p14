import React from 'react';
import './modal.css';

// Modal
export default function Modal({
   modalMessage,
   modalFontColor,
   modalFontSize,
   modalWidth,
   modalHeight,
   modalTextAreaBgColor,
   mRed,
   mGreen,
   mBlue,
   mOpacity,
   closeModal // Ajout de la fonction closeModal reçue en prop
}) {

   const defaultModal = {
      message: modalMessage || "Success !", // message
      fontColor: modalFontColor || "black", // Colors 
      fontSize: modalFontSize || 32, // Size px
      widthOfModal: modalWidth || 50, // size % 0-100
      heightOfModal: modalHeight || 50, // size % 0-100
      mainBackgroundOpacity: mOpacity || 50, // opacity 0-100
   };

   // Close Modal when clicking anywhere else
   function otherCloseModal(event) {
      let validation = document.getElementById("validationModal");
      if (validation === event.target) {
         closeModal(); // Utilise la fonction closeModal pour fermer
      }
   }

   return (
      <div
         id="validationModal"
         onClick={(e) => otherCloseModal(e)}
         style={{ display: 'flex' }} // Assurez-vous que la modale est affichée
      >
         <div
            id="contentModal"
         >
            <button id="closeValidationModal" onClick={closeModal}>X</button>
            <div
               id="confirmationModal"
               style={{
                  color: defaultModal.fontColor,
                  fontSize: `${defaultModal.fontSize}px`
               }}
            >
               {defaultModal.message}
            </div>
         </div>
      </div>
   );
}
