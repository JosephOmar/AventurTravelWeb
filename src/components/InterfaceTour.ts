export interface Tour {
  destination_id: string;
  title: string;
  descriptionTitle: string;
  slug: string;
  imgSlider: string[];
  descriptionGeneral: string;
  timeTravel: string;
  itinerary: string[];
  travelDetails: string[];
  considerations: string[];
  additionalServices: string[];
  imgSliderSecondary: string[];
  sectionPrimary: string;
  sectionSecondary: string;
  price: {
    currency: string;
    amount: number;
    includedServices: string[];
    notIncludedServices: string[];
  }[];
  comment: {
    name: string;
    imgProfile: string;
    content: string;
    date: string;
  }[];
}