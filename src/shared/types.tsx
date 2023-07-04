

export enum SelectedPage{
    Home = "home",
    Benefits = "benefits",
    ourClasses = "ourclasses",
    ContactUs = "contactus",
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
  
