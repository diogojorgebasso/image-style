function magicStyle(params) {
  let images = document.querySelectorAll(".magicStyle");
  if (params.shadow_type === "hard") {
    options.shadow_type = "0px";
  }
  if (params.shadow_type === "soft") {
    options.shadow_type = "150px";
  }
  images.forEach((image) => {
    image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,12)`;
    if (options.padding) {
      image.style.padding = "1em";
    }
  });
}

module.exports.magicStyle = magicStyle;
