const baseUrl = 'http://localhost:3001';

export const getAllBooks = async () => {
    const url = `${baseUrl}/books`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();
      return data;

    } catch (error) {
      console.error('network error');
    }
}