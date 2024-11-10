const docsModule = require('../../apps/website/sidebars.js');

describe('Docs Module', () => {
  test('should contain specific categories in the docs array', () => {
    const { docs } = docsModule;
    expect(docs).toBeInstanceOf(Array);
    expect(docs).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ label: 'Introduction' }),
        expect.objectContaining({ label: 'Getting an interview' }),
        expect.objectContaining({ label: 'Coding interview preparation' }),
        expect.objectContaining({
          label: 'System design interview preparation',
        }),
        expect.objectContaining({ label: 'Behavioral interview preparation' }),
      ]),
    );
  });
});

describe('Docs Module', () => {
  test('should contain expected items in the "Coding interview preparation" category', () => {
    const { docs } = docsModule;

    const codingPrepCategory = docs.find(
      (category) => category.label === 'Coding interview preparation',
    );

    expect(codingPrepCategory).toBeDefined();
    expect(codingPrepCategory.items).toEqual(
      expect.arrayContaining([
        'coding-interview-prep',
        'programming-languages-for-coding-interviews',
        'coding-interview-study-plan',
        'coding-interview-cheatsheet',
        'coding-interview-techniques',
        'mock-interviews',
        'coding-interview-rubrics',
      ]),
    );
  });
});

describe('Docs Module', () => {
  test('should contain expected items in the "Behavioral interview preparation" category', () => {
    const { docs } = docsModule;

    const behavioralPrepCategory = docs.find(
      (category) => category.label === 'Behavioral interview preparation',
    );

    expect(behavioralPrepCategory).toBeDefined();
    expect(behavioralPrepCategory.items).toEqual(
      expect.arrayContaining([
        'behavioral-interview',
        'behavioral-interview-rubrics',
        'behavioral-interview-questions',
        'self-introduction',
        'final-questions',
      ]),
    );
  });
});

describe('Docs Module', () => {
  test('should contain expected structure in the "Algorithms study cheatsheets" category', () => {
    const { docs } = docsModule;

    const algorithmsCheatsheets = docs.find(
      (category) => category['Algorithms study cheatsheets'],
    );

    expect(algorithmsCheatsheets).toBeDefined();

    const algorithmsItems =
      algorithmsCheatsheets['Algorithms study cheatsheets'];

    expect(algorithmsItems).toEqual(
      expect.arrayContaining([
        'algorithms/study-cheatsheet',
        expect.objectContaining({
          type: 'category',
          label: 'Basics',
          collapsible: false,
          items: [
            'algorithms/array',
            'algorithms/string',
            'algorithms/hash-table',
            'algorithms/recursion',
            'algorithms/sorting-searching',
          ],
        }),
        expect.objectContaining({
          type: 'category',
          label: 'Data structures',
          collapsible: false,
          items: [
            'algorithms/matrix',
            'algorithms/linked-list',
            'algorithms/queue',
            'algorithms/stack',
            'algorithms/interval',
          ],
        }),
        expect.objectContaining({
          type: 'category',
          label: 'Advanced data structures',
          collapsible: false,
          items: [
            'algorithms/tree',
            'algorithms/graph',
            'algorithms/heap',
            'algorithms/trie',
          ],
        }),
        expect.objectContaining({
          type: 'category',
          label: 'Additional',
          collapsible: false,
          items: [
            'algorithms/dynamic-programming',
            'algorithms/binary',
            'algorithms/math',
            'algorithms/geometry',
          ],
        }),
      ]),
    );
  });
});

describe('Docs Module', () => {
  test('should contain expected items in the "Data structures" subcategory under "Algorithms study cheatsheets"', () => {
    const { docs } = docsModule;

    const algorithmsCheatsheets = docs.find(
      (category) => category['Algorithms study cheatsheets'],
    );

    expect(algorithmsCheatsheets).toBeDefined();

    const algorithmsItems =
      algorithmsCheatsheets['Algorithms study cheatsheets'];

    const dataStructuresCategory = algorithmsItems.find(
      (item) => item.label === 'Data structures' && item.type === 'category',
    );

    expect(dataStructuresCategory).toBeDefined();
    expect(dataStructuresCategory.items).toEqual(
      expect.arrayContaining([
        'algorithms/matrix',
        'algorithms/linked-list',
        'algorithms/queue',
        'algorithms/stack',
        'algorithms/interval',
      ]),
    );
  });
});

describe('Docs Module', () => {
  test('should contain expected items in the "Advanced data structures" subcategory under "Algorithms study cheatsheets"', () => {
    const { docs } = docsModule;

    const algorithmsCheatsheets = docs.find(
      (category) => category['Algorithms study cheatsheets'],
    );

    expect(algorithmsCheatsheets).toBeDefined();

    const algorithmsItems =
      algorithmsCheatsheets['Algorithms study cheatsheets'];

    const advancedDataStructuresCategory = algorithmsItems.find(
      (item) =>
        item.label === 'Advanced data structures' && item.type === 'category',
    );

    expect(advancedDataStructuresCategory).toBeDefined();
    expect(advancedDataStructuresCategory.items).toEqual(
      expect.arrayContaining([
        'algorithms/tree',
        'algorithms/graph',
        'algorithms/heap',
        'algorithms/trie',
      ]),
    );
  });
});

describe('Docs Module', () => {
  test('should contain expected items in the "Additional" subcategory under "Algorithms study cheatsheets"', () => {
    const { docs } = docsModule;

    // Find the "Algorithms study cheatsheets" category
    const algorithmsCheatsheets = docs.find(
      (category) => category['Algorithms study cheatsheets'],
    );

    expect(algorithmsCheatsheets).toBeDefined();

    const algorithmsItems =
      algorithmsCheatsheets['Algorithms study cheatsheets'];

    const additionalCategory = algorithmsItems.find(
      (item) => item.label === 'Additional' && item.type === 'category',
    );

    expect(additionalCategory).toBeDefined();
    expect(additionalCategory.items).toEqual(
      expect.arrayContaining([
        'algorithms/dynamic-programming',
        'algorithms/binary',
        'algorithms/math',
        'algorithms/geometry',
      ]),
    );
  });
});
