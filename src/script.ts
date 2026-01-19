import { applyStarRating } from "./ui/starRating.js";
import { initValidation } from "./form/validation.js";
import { initFormSubmit } from "./form/submit.js";

applyStarRating("overallRating","overall","overallError");
applyStarRating("qualityRating","quality","qualityError");
applyStarRating("valueFormoneyRating","value","valueError");
applyStarRating("deliveryRating","delivery","deliveryError");
applyStarRating("customerServiceRating","service","serviceErro");

initValidation();

const form = document.querySelector("form") as HTMLFormElement;
initFormSubmit(form);