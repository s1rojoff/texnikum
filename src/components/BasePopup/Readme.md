<BasePopup
    :modal="store.$state.openModal"
    :popupData="{
      name: managements[store.cardId].name,
      url: managements[store.cardId].url,
      experience: managements[store.cardId].experience
    }"
    @closePopup="store.togglePopup"
  />
  