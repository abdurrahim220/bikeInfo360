export type Slider={
    id:number,
    image: string,
    title: string,
  }


  export type BrandType={
    id:number,
    image: string,
    title: string,
  }

  export type BudgetType = {
    id: number;
    range: string;
  };

  export type DisplacementType = {
    id: number;
    range: string;
  };


  export type BikeType = {
    id: number;
    type: string;
  };



  export interface BikeModels {
    id: string
    name: string
    image: string
    rating: number
    specs: {
      cc: number
      kmpl: number
      category: string
    }
    pricing: {
      exShowroom: string
      emiStarts: number
    }
  }