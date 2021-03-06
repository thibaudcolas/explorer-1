const path = require("path");

module.exports = {
  // repoSrc:
  // the path to the frontend repo www-frontend
  // default config assumes you have the www-frontend repo as a sibling folder to this repo
  repoSrc: path.join(__dirname, "../www-frontend/"),

  // components:
  // component folder names that we want to bring over from repoSrc
  components: [
    "AnimationCaret",
    "BaseButton",
    "BaseImage",
    "BaseImagePlaceholder",
    "BlockImage",
    "BlockTeaser",
    "BlockText",
    "HeroFeature",
    "HeroFocalPoint",
    "HeroMedia",
  ],

  // scssFolder:
  // where the scss files for each component should be created
  // probably shouldn't ever need to modify this
  scssFolder: path.join(__dirname, "src/scss/components/"),

  // componentPartialsFile:
  // the scss file that will import all of the component partials
  // this file itself is imported via main.scss
  componentPartialsFile: path.join(__dirname, "src/scss/_components.scss"),
};
