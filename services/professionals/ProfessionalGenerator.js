var randomName = require("random-name");

class ProfessionalGenerator {
  generate = () => {
    const professionalName = this.name();

    return {
      professionalName: professionalName,
      base64Image: this.base64EncodedImage(),
      nameLink: this.nameLink(professionalName),
      primaryDescription: this.primaryDescription(),
      workDescription1: this.workDescription1(),
      workDescription2: this.workDescription2(),
      linkTitleText: this.linkTitleText(professionalName),
      linkedInLink: this.linkedInLink(),
      githubLink: this.githubLink(),
    };
  };

  nameLink = (professionalName) => ({
    firstName: professionalName.split(" ")[0],
    url: "https://github.com/westonkd",
  });

  primaryDescription = () =>
    " Is a software engineer working at Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  name = () => `${randomName.first()} ${randomName.last()}`;

  base64EncodedImage = () =>
    "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";

  workDescription1 = () => `
    <strong>2019 - 2022</strong> - Senior Software Engineer @ Instructure
  `;

  workDescription2 = () => `
    <strong>2018 - 2019</strong> - Engineering Lead @ Instructure
    <img src="#" onerror="console.log('always sanitize user-provided markup 😉')" />
  `;

  linkTitleText = (professionalName) => `Get in touch with ${professionalName}`;

  linkedInLink = () => ({
    text: "Linkedin 📄",
    link: "https://www.linkedin.com/in/weston-dransfield-06331568/",
  });

  githubLink = () => ({
    text: "GitHub 🐱",
    link: "https://github.com/westonkd",
  });
}

module.exports = ProfessionalGenerator;
