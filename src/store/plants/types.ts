export interface PlantData {
  name: string;
  preco: number;
  img: string;
  ordem: number;
}

interface InitialState {
  data: PlantData[];
  error: {
    hasError: boolean;
    name?: string;
    status?: number;
    message?: string;
  };
}

export const state: InitialState = {
  data: [] as PlantData[],
  error: {
    hasError: false,
  },
};
