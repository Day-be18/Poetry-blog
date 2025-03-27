import { useState, useEffect } from 'react';

export default function Home() {
  const [poems, setPoems] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingPoem, setEditingPoem] = useState(null); // Для режима редактирования // Для режима редактирования // Для режима редактирования // Для режима редактирования // Для режима редактирования
  const [search, setSearch] = useState('');
  const [fileError, setFileError] = useState(''); // Новое состояние для ошибок // Новое состояние для ошибок // Новое состояние для ошибок // Новое состояние для ошибок // Новое состояние для ошибок

  useEffect(() => {
    const savedPoems = JSON.parse(localStorage.getItem('poems')) || [];
    setPoems(savedPoems);
  }, []);

  function savePoems(updatedPoems) {
    localStorage.setItem('poems', JSON.stringify(updatedPoems));
    setPoems(updatedPoems);
  }

  function addOrUpdatePoem() {
    if (!title || !content) return;

    if (editingPoem) {
      // Режим редактирования: обновляем существующее стихотворение
      // Режим редактирования: обновляем существующее стихотворение
      // Режим редактирования: обновляем существующее стихотворение
      // Режим редактирования: обновляем существующее стихотворение
      // Режим редактирования: обновляем существующее стихотворение
      const updatedPoems = poems.map((poem) =>
        poem.id === editingPoem.id ? { ...poem, title, content } : poem
      // Режим добавления: создаем новое стихотворение
      );
      // Режим добавления: создаем новое стихотворение
      savePoems(updatedPoems);
      // Режим добавления: создаем новое стихотворение
      setEditingPoem(null);
      // Режим добавления: создаем новое стихотворение
    } else {
      // Режим добавления: создаем новое стихотворение
      const newPoem = { id: Date.now(), title, content };
      const updatedPoems = [...poems, newPoem];
      savePoems(updatedPoems);
    }

    setTitle('');
    setContent('');
  }

  function deletePoem(id) {
    const updatedPoems = poems.filter((poem) => poem.id !== id);
    savePoems(updatedPoems);
  }

  function editPoem(poem) {
    setEditingPoem(poem);
    setTitle(poem.title);
    setContent(poem.content);
  }

  // Определяем filteredPoems только один раз
  const filteredPoems = poems.filter((poem) =>
    poem.title.toLowerCase().includes(search.toLowerCase())
  );

  // Добавляем функцию для скачивания стихотворения
  function downloadPoem(poem) {
    const text = `${poem.title}\n\n${poem.content}\n\n- A.G`;
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${poem.title}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  // Добавляем функцию для загрузки файлов
  const handleTxtFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (file.type !== 'text/plain') {
      setFileError('Пожалуйста, загрузите файл в формате .txt');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      setContent(text);
      setTitle(file.name.replace('.txt', ''));
      setFileError('');
    };
    reader.onerror = () => {
      setFileError('Ошибка при чтении файла');
    };
    reader.readAsText(file);
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-[url('/images/parchment-background.png')] bg-cover bg-center bg-fixed bg-no-repeat overflow-x-hidden"
      style={{
        backgroundColor: 'rgba(255, 252, 242, 0.7)',
        backgroundBlendMode: 'overlay',
        minHeight: '100vh',
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundSize: '100% 100%',
        margin: 0,
        padding: 0
      }}
    >
      {/* Список карточек стихотворений */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl">
        {filteredPoems.map((poem) => (
          <li
            key={poem.id}
            className="card fade-in bg-white"
          >
            <h2 className="text-xl font-semibold text-gray-700">
              {poem.title}
            </h2>
            <p className="text-gray-700 mt-3">{poem.content}</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => editPoem(poem)}
                className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold text-sm px-3 py-1 rounded-md"
              >
                ✏ Редактировать
              </button>
              <button
                onClick={() => deletePoem(poem.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold text-sm px-3 py-1 rounded-md"
              >
                🗑 Удалить
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Футер */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Блог стихотворений. Все права защищены.
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}