export type TFaq = {
  question: string;
  answer: string;
};

export type TServicesBlock = {
  title: string;
  content: string;
};

export type THomeContentResponse = {
  data?: {
    android_app_link: string;
    ios_app_link: string;
    sections: {
      about: {
        title: string;
        contents: string[];
        image: string;
      };
      contact: {
        emails: string[];
        website: string;
      };
      faq: TFaq[];
      service: {
        title: string;
        content: string;
        block1: TServicesBlock;
        block2: TServicesBlock;
        block3: TServicesBlock;
      };
      top: {
        title: string;
        content: string;
        image: string;
      };
    };
  };
  success?: boolean;
};
