import { DispatchAction } from 'models/Store.interface';

import { randomId } from 'utils/randomId';

interface ICard {
  id: string;
  title: string;
  tag: string;
}

interface IColumns {
  id: string;
  title: string;
  color: string;
  cards: ICard[];
}

export interface boardReducer {
  columns: IColumns[];
}

export const types = {
  SET_COLUMN: 'column/ADD',
  REMOVE_COLUMN: 'column/REMOVE',
  SET_TASK: 'task/ADD',
  REMOVE_TASK: 'task/REMOVE',
};

// Reducer

const initialState = {
  columns: [
    {
      id: '1',
      title: '📝 To Do',
      color: '#5CC4FF',
      cards: [
        {
          id: '1',
          title: 'Card title 1',
          tag: 'Card1',
        },
        {
          id: '2',
          title: 'Card title 2',
          tag: 'Card2',
        },
        {
          id: '3',
          title: 'Card title 3',
          tag: 'Card3',
        },
      ],
    },
    {
      id: '2',
      title: '💻 In Progress',
      color: '#945AD1',
      cards: [
        {
          id: '9',
          title: 'Card title 9',
          tag: 'Card2',
        },
      ],
    },
    {
      id: '3',
      title: '🚀 Done',
      color: '#59D090',
      cards: [
        {
          id: '10',
          title: 'Card title 10',
          tag: 'Card2',
        },
        {
          id: '11',
          title: 'Card title 11',
          tag: 'Card2',
        },
      ],
    },
  ],
};

const reducer = (
  state: boardReducer = initialState,
  action: DispatchAction,
) => {
  switch (action.type) {
    case types.SET_COLUMN:
      return {
        ...state,
        columns: [...state.columns, action.payload],
      };
    case types.SET_TASK: {
      const newCard = state.columns.map((column) => {
        if (column.id === action.payload.idColumn) {
          return {
            ...column,
            cards: [...column.cards, action.payload.card],
          };
        }

        return column;
      });

      return {
        ...state,
        columns: newCard,
      };
    }
    default:
      return state;
  }
};

// Action Creators

interface IaddColumn {
  title: string;
}

export const addColumn = ({ title }: IaddColumn) => {
  const id = randomId();

  return {
    type: types.SET_COLUMN,
    payload: {
      id,
      title,
      color: '#89c5cc',
      cards: [],
    },
  };
};

interface IaddTask {
  title: string;
  tag: string;
  idColumn: string;
}

export const addTask = ({ title, tag, idColumn }: IaddTask) => {
  const idCard = randomId();

  return {
    type: types.SET_TASK,
    payload: {
      idColumn,
      card: {
        id: idCard,
        title,
        tag,
      },
    },
  };
};

export default reducer;
