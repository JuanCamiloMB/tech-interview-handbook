const onRequest = require('../../apps/website/functions/grind75/[[catchall]].js');
const jest = require('@jest/globals');

global.fetch = jest.fn();

describe('onRequest', () => {
  const SOURCE_HOST = 'https://grind75.pages.dev';

  beforeEach(() => {
    fetch.mockClear();
  });

  it('should rewrite the URL and fetch the content from the new domain', async () => {
    const requestUrl = 'https://originaldomain.com/some-path?query=123';
    const request = { url: requestUrl, method: 'GET' };

    const context = { request };

    const mockResponse = new Response('Mock response data', {
      status: 200,
    });
    fetch.mockResolvedValue(mockResponse);

    const response = await onRequest(context);

    const expectedUrl = SOURCE_HOST + '/some-path?query=123';

    expect(fetch).toHaveBeenCalledWith(expectedUrl, request);

    expect(response).toBe(mockResponse);
  });

  it('should handle errors from fetch', async () => {
    const requestUrl = 'https://originaldomain.com/test-error';
    const request = { url: requestUrl, method: 'GET' };
    const context = { request };

    fetch.mockRejectedValue(new Error('Network error'));

    await expect(onRequest(context)).rejects.toThrow('Network error');

    const expectedUrl = SOURCE_HOST + '/test-error';
    expect(fetch).toHaveBeenCalledWith(expectedUrl, request);
  });
});
