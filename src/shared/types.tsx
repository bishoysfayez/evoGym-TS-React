

export enum SelectedPage{
    Home = "Home",
    Benefits = "Benefits",
    ourClasses = "Our Classes",
    ContactUs = "Contact Us",
  }
  
  export interface BenefitType {
    icon: JSX.Element,
    title: string,
    description: string
  }


  export interface Classes {
    name: string;
    description?: string; // optional 
    image: string
  }
  
