import itemsStore, { deleteItem, addComment } from '../../services/items';

it('return empty arr by default', () => {
  expect(itemsStore([], {})).toEqual([]);
});

describe('handle deleteItem', () => {
  it('delete current item from arr', () => {
    const payload = {
      id: 'abc'
    };

    const state = [{ name: '1', id: '123' }, { name: '1', id: 'abc' }];

    expect(itemsStore(state, deleteItem(payload))).toEqual([{ name: '1', id: '123' }]);
  });
});

describe('handle addComment', () => {
  it('create new array of comments if none exist', () => {
    const state = [{ name: '1', id: '123' }, { name: '1', id: 'abc' }];
    const payload = {
      comment: 'test',
      id: '123'
    };

    expect(itemsStore(state, addComment(payload))).toEqual([
      { name: '1', id: '123', comments: [{ comment: 'test' }] },
      { name: '1', id: 'abc' }
    ]);
  });

  it('add comment to the array of comments in the current item', () => {
    const state = [{ name: '1', id: '123', comments: [{ comment: 'test' }] }, { name: '1', id: 'abc' }];
    const payload = {
      comment: 'test',
      id: '123'
    };

    expect(itemsStore(state, addComment(payload))).toEqual([
      { name: '1', id: '123', comments: [{ comment: 'test' }, { comment: 'test' }] },
      { name: '1', id: 'abc' }
    ]);
  });
});
