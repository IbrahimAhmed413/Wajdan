import React, { useState } from 'react';
import { Search, Book, Users, Home, Mail, Info, Menu, X, Heart, Feather, BookOpen, User } from 'lucide-react';

const poetsData = {
  urdu: [
    { id: 1, name: 'علامہ اقبال', nameEn: 'Allama Iqbal', region: 'اردو', image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400', bio: 'شاعر مشرق، مفکر اسلام اور پاکستان کے قومی شاعر', works: ['بانگ درا', 'بال جبریل', 'ضرب کلیم', 'ارمغان حجاز'] },
    { id: 2, name: 'مرزا غالب', nameEn: 'Mirza Ghalib', region: 'اردو', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400', bio: 'اردو اور فارسی کے عظیم شاعر', works: ['دیوان غالب', 'نسخہ ہائے غالب'] },
    { id: 3, name: 'فیض احمد فیض', nameEn: 'Faiz Ahmed Faiz', region: 'اردو', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', bio: 'انقلابی شاعر اور ادیب', works: ['نقش فریادی', 'دست صبا', 'زندان نامہ'] },
  ],
  punjabi: [
    { id: 4, name: 'بلھے شاہ', nameEn: 'Bulleh Shah', region: 'پنجابی', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', bio: 'صوفی شاعر اور پنجاب کے عظیم بزرگ', works: ['کافیاں', 'سیف الملوک'] },
    { id: 5, name: 'بابا فرید', nameEn: 'Baba Farid', region: 'پنجابی', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400', bio: 'پنجابی صوفی شاعری کے بانی', works: ['کافیاں', 'سلوک فرید'] },
  ],
  sindhi: [
    { id: 6, name: 'شاہ عبداللطیف بھٹائی', nameEn: 'Shah Abdul Latif Bhittai', region: 'سندھی', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', bio: 'سندھ کے عظیم صوفی شاعر', works: ['شاہ جو رسالو', 'سُر'] },
  ],
  pashto: [
    { id: 7, name: 'خوشحال خان خٹک', nameEn: 'Khushal Khan Khattak', region: 'پشتو', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', bio: 'پشتو شاعری کے بابا', works: ['دیوان خوشحال', 'سوانح عمری'] },
    { id: 8, name: 'رحمان بابا', nameEn: 'Rahman Baba', region: 'پشتو', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', bio: 'پشتو کے صوفی شاعر', works: ['دیوان رحمان بابا'] },
  ],
  balochi: [
    { id: 9, name: 'جام درک', nameEn: 'Jam Durrak', region: 'بلوچی', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', bio: 'بلوچی شاعری کے عظیم نام', works: ['بلوچی کلام'] },
  ]
};

const blogPosts = [
  { id: 1, title: 'تصوف کی روحانی تعلیمات', date: '15 اکتوبر 2025', author: 'محمد احمد', image: 'https://images.unsplash.com/photo-1518176258769-f227c798150e?w=600', excerpt: 'تصوف ایک روحانی راستہ ہے جو محبت اور عرفان کی طرف لے جاتا ہے۔ یہ اسلامی روحانیت کا وہ پہلو ہے جو دل کی صفائی اور اللہ سے قربت کی تعلیم دیتا ہے...', content: 'تصوف اسلام کی روحانی جہت ہے...' },
  { id: 2, title: 'علامہ اقبال کا فلسفہ خودی', date: '12 اکتوبر 2025', author: 'فاطمہ خان', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600', excerpt: 'علامہ اقبال نے خودی کے فلسفے کو اپنی شاعری میں مرکزی حیثیت دی۔ خودی سے مراد انسان کی اپنی ذات کی پہچان اور اس کی تعمیر ہے...', content: 'خودی کو کر بلند اتنا کہ...' },
  { id: 3, title: 'پاکستانی زبانوں میں صوفی شاعری', date: '10 اکتوبر 2025', author: 'علی حسن', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600', excerpt: 'پاکستان کی ہر علاقائی زبان میں صوفی شاعری کی ایک مضبوط روایت موجود ہے۔ اردو، پنجابی، سندھی، پشتو اور بلوچی میں صوفیانہ کلام کا خزانہ ہے...', content: 'پاکستان کی زبانیں...' },
  { id: 4, title: 'فیض احمد فیض کی انقلابی شاعری', date: '8 اکتوبر 2025', author: 'سارہ خان', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600', excerpt: 'فیض احمد فیض نے اپنی شاعری میں محبت، انقلاب اور انسانیت کے موضوعات کو بیان کیا۔ ان کی شاعری میں سماجی اصلاح کا پیغام ہے...', content: 'بول کہ لب آزاد ہیں تیرے...' },
  { id: 5, title: 'بلھے شاہ کی صوفیانہ تعلیمات', date: '5 اکتوبر 2025', author: 'احمد علی', image: 'https://images.unsplash.com/photo-1518176258769-f227c798150e?w=600', excerpt: 'بلھے شاہ پنجاب کے عظیم صوفی شاعر ہیں۔ ان کی کافیاں محبت، وحدت الوجود اور روحانیت کے گہرے معانی سے بھری ہیں...', content: 'نہ کوئی ہندو نہ مسلمان...' },
  { id: 6, title: 'شاہ عبداللطیف بھٹائی کا رسالہ', date: '3 اکتوبر 2025', author: 'زینب احمد', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600', excerpt: 'شاہ عبداللطیف بھٹائی کا رسالہ سندھی ادب کا شاہکار ہے۔ اس میں سندھ کی ثقافت، محبت کی داستانیں اور صوفیانہ تعلیمات شامل ہیں...', content: 'سندھی ادب کا شاہکار...' },
];

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedPoet, setSelectedPoet] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const regions = [
    { id: 'all', name: 'تمام' },
    { id: 'urdu', name: 'اردو' },
    { id: 'punjabi', name: 'پنجابی' },
    { id: 'sindhi', name: 'سندھی' },
    { id: 'pashto', name: 'پشتو' },
    { id: 'balochi', name: 'بلوچی' },
  ];

  const getAllPoets = () => {
    return Object.values(poetsData).flat();
  };

  const getFilteredPoets = () => {
    let poets = selectedRegion === 'all' ? getAllPoets() : poetsData[selectedRegion] || [];

    if (searchQuery) {
      poets = poets.filter(poet =>
        poet.name.includes(searchQuery) ||
        poet.nameEn.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return poets;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('شکریہ! آپ کا پیغام بھیج دیا گیا ہے۔');
    setFormData({ name: '', email: '', message: '' });
  };

  const NavBar = () => (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-emerald-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="bg-gradient-to-br from-emerald-600 to-amber-600 p-3 rounded-full">
              <Feather className="text-white" size={32} />
            </div>
            <div className="text-right">
              <h1 className="text-3xl font-bold text-emerald-800" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                وجدان
              </h1>
              <p className="mt-2 text-sm text-gray-600" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>پاکستانی شعرا اور ادب</p>
            </div>
          </div>

          <div className="hidden md:flex space-x-1 rtl:space-x-reverse">
            <button onClick={() => setCurrentPage('home')} className={`flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-lg transition ${currentPage === 'home' ? 'bg-emerald-600 text-white' : 'text-gray-700 hover:bg-emerald-50'}`}>
              <Home size={20} />
              <span style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>صفحہ اول</span>
            </button>
            <button onClick={() => setCurrentPage('blogs')} className={`flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-lg transition ${currentPage === 'blogs' ? 'bg-emerald-600 text-white' : 'text-gray-700 hover:bg-emerald-50'}`}>
              <BookOpen size={20} />
              <span style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>بلاگز</span>
            </button>
            <button onClick={() => setCurrentPage('poets')} className={`flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-lg transition ${currentPage === 'poets' ? 'bg-emerald-600 text-white' : 'text-gray-700 hover:bg-emerald-50'}`}>
              <Users size={20} />
              <span style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>صوفی شعرا</span>
            </button>
            <button onClick={() => setCurrentPage('library')} className={`flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-lg transition ${currentPage === 'library' ? 'bg-emerald-600 text-white' : 'text-gray-700 hover:bg-emerald-50'}`}>
              <Book size={20} />
              <span style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>کتب خانہ</span>
            </button>
            <button onClick={() => setCurrentPage('about')} className={`flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-lg transition ${currentPage === 'about' ? 'bg-emerald-600 text-white' : 'text-gray-700 hover:bg-emerald-50'}`}>
              <Info size={20} />
              <span style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>تعارف</span>
            </button>
            <button onClick={() => setCurrentPage('contact')} className={`flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-lg transition ${currentPage === 'contact' ? 'bg-emerald-600 text-white' : 'text-gray-700 hover:bg-emerald-50'}`}>
              <Mail size={20} />
              <span style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>رابطہ</span>
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="w-full text-right px-4 py-2 hover:bg-emerald-50 rounded" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>صفحہ اول</button>
            <button onClick={() => { setCurrentPage('blogs'); setMobileMenuOpen(false); }} className="w-full text-right px-4 py-2 hover:bg-emerald-50 rounded" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>بلاگز</button>
            <button onClick={() => { setCurrentPage('poets'); setMobileMenuOpen(false); }} className="w-full text-right px-4 py-2 hover:bg-emerald-50 rounded" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>صوفی شعرا</button>
            <button onClick={() => { setCurrentPage('library'); setMobileMenuOpen(false); }} className="w-full text-right px-4 py-2 hover:bg-emerald-50 rounded" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>کتب خانہ</button>
            <button onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }} className="w-full text-right px-4 py-2 hover:bg-emerald-50 rounded" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>تعارف</button>
            <button onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }} className="w-full text-right px-4 py-2 hover:bg-emerald-50 rounded" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>رابطہ</button>
          </div>
        )}
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="space-y-12">
      <div className="relative h-[500px] bg-gradient-to-br from-emerald-600 via-emerald-700 to-amber-600 rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518176258769-f227c798150e?w=1200)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center p-8 text-white">
          <Feather size={80} className="mb-6 animate-pulse" />
          <h1 className="text-6xl font-bold mb-4" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
            وجدان
          </h1>
          <p className="text-2xl mt-5 mb-6 max-w-2xl" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
            پاکستانی زبانوں کے صوفی شعرا اور ادبی بلاگز کا مرکز
          </p>
          <div className="flex space-x-6 rtl:space-x-reverse">
            <button onClick={() => setCurrentPage('blogs')} className="bg-white text-emerald-700 px-8 py-3 rounded-full font-bold hover:bg-amber-100 transition" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
              بلاگز پڑھیں
            </button>
            <button onClick={() => setCurrentPage('poets')} className="bg-amber-500 text-white px-8 py-3 rounded-full font-bold hover:bg-amber-600 transition" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
              شعرا دیکھیں
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-emerald-800" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
            تازہ ترین بلاگز
          </h2>
          <button onClick={() => setCurrentPage('blogs')} className="text-emerald-600 hover:text-emerald-800 font-semibold" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
            تمام دیکھیں ←
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map(blog => (
            <div key={blog.id} onClick={() => setSelectedBlog(blog)} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer">
              <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
              <div className="p-6 text-right">
                <div className="flex justify-between items-center mb-3 text-sm text-gray-500">
                  <span>{blog.date}</span>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span>{blog.author}</span>
                    <User size={16} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-emerald-800 mb-3" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                  {blog.title}
                </h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                  {blog.excerpt.substring(0, 120)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-emerald-50 rounded-3xl p-12 text-center">
        <h2 className="text-4xl font-bold text-emerald-800 mb-4" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
          پاکستانی زبانوں کے شعرا
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
          اردو، پنجابی، سندھی، پشتو اور بلوچی - پاکستان کی تمام علاقائی زبانوں میں صوفی شعرا کا عظیم ذخیرہ
        </p>
        <button onClick={() => setCurrentPage('poets')} className="bg-emerald-600 text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-emerald-700 transition" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
          شعرا دریافت کریں
        </button>
      </div>
    </div>
  );

  const BlogsPage = () => (
    <div>
      <h2 className="text-5xl font-bold text-emerald-800 mb-4 text-right" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
        بلاگز
      </h2>
      <p className="text-xl text-gray-600 mb-12 text-right" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
        پاکستانی ادب، شعرا اور تصوف پر تحریریں
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(blog => (
          <div key={blog.id} onClick={() => setSelectedBlog(blog)} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer transform hover:-translate-y-2">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
            <div className="p-6 text-right">
              <div className="flex justify-between items-center mb-3 text-sm text-gray-500">
                <span>{blog.date}</span>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span>{blog.author}</span>
                  <User size={16} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-emerald-800 mb-3" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                {blog.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                {blog.excerpt}
              </p>
              <button className="text-emerald-600 font-bold hover:text-emerald-800" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                مکمل پڑھیں ←
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 overflow-y-auto" onClick={() => setSelectedBlog(null)}>
          <div className="bg-white rounded-3xl max-w-4xl w-full my-8 p-8 md:p-12" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedBlog(null)} className="float-left mb-4 hover:bg-gray-100 p-2 rounded-full">
              <X size={32} className="text-gray-600" />
            </button>
            <div className="text-right">
              <img src={selectedBlog.image} alt={selectedBlog.title} className="w-full h-96 object-cover rounded-2xl mb-8" />
              <div className="flex justify-between items-center mb-6 text-gray-600">
                <span>{selectedBlog.date}</span>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span>{selectedBlog.author}</span>
                  <User size={18} />
                </div>
              </div>
              <h1 className="text-5xl font-bold text-emerald-800 mb-8" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                {selectedBlog.title}
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                {selectedBlog.excerpt}
              </p>
              <div className="prose prose-lg max-w-none text-right">
                <p className="text-lg text-gray-800 leading-loose" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                  {selectedBlog.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const PoetsPage = () => {
    const filteredPoets = getFilteredPoets();

    return (
      <div>
        <h2 className="text-5xl font-bold text-emerald-800 mb-4 text-right" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
          پاکستانی زبانوں کے صوفی شعرا
        </h2>
        <p className="text-xl text-gray-600 mt-10 mb-12 text-right" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
          اردو، پنجابی، سندھی، پشتو اور بلوچی شعرا کا مجموعہ
        </p>

        <div className="mb-8 space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="شاعر کا نام تلاش کریں..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pr-14 rounded-2xl border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none text-right text-lg shadow-lg"
              style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
            />
            <Search className="absolute right-5 top-4 text-gray-400" size={28} />
          </div>

          <div className="flex flex-wrap gap-3 justify-end">
            {regions.map(region => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`px-8 py-3 rounded-full text-lg font-bold transition ${selectedRegion === region.id
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-emerald-50 shadow'
                  }`}
                style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
              >
                {region.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPoets.map(poet => (
            <div
              key={poet.id}
              onClick={() => setSelectedPoet(poet)}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer transform hover:-translate-y-2"
            >
              <img src={poet.image} alt={poet.name} className="w-full h-72 object-cover" />
              <div className="p-6 text-right">
                <h3 className="text-3xl font-bold text-emerald-800 mb-2" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                  {poet.name}
                </h3>
                <p className="text-lg text-gray-600 mb-4">{poet.nameEn}</p>
                <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                  {poet.region}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredPoets.length === 0 && (
          <div className="text-center py-16">
            <p className="text-2xl text-gray-500" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
              کوئی شاعر نہیں ملا
            </p>
          </div>
        )}

        {selectedPoet && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 overflow-y-auto" onClick={() => setSelectedPoet(null)}>
            <div className="bg-white rounded-3xl max-w-4xl w-full my-8 p-8 md:p-12" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedPoet(null)} className="float-left mb-4 hover:bg-gray-100 p-2 rounded-full">
                <X size={32} className="text-gray-600" />
              </button>
              <div className="text-right">
                <img src={selectedPoet.image} alt={selectedPoet.name} className="w-full h-80 object-cover rounded-2xl mb-8 shadow-xl" />
                <h2 className="text-5xl font-bold text-emerald-800 mb-4" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                  {selectedPoet.name}
                </h2>
                <p className="text-2xl text-gray-600 mb-4">{selectedPoet.nameEn}</p>
                <span className="inline-block bg-emerald-100 text-emerald-800 px-6 py-2 rounded-full text-lg font-bold mb-8" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                  {selectedPoet.region}
                </span>
                <div className="bg-amber-50 p-8 rounded-2xl mb-8 shadow-lg">
                  <h3 className="text-3xl font-bold text-emerald-800 mb-4" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                    سوانح حیات
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                    {selectedPoet.bio}
                  </p>
                </div>
                <div className="bg-emerald-50 p-8 rounded-2xl shadow-lg">
                  <h3 className="text-3xl font-bold text-emerald-800 mb-6" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                    مشہور تصانیف
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedPoet.works.map((work, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-xl shadow flex items-center space-x-3 rtl:space-x-reverse">
                        <Book className="text-emerald-600" size={24} />
                        <span className="text-lg text-gray-800 font-semibold" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                          {work}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const LibraryPage = () => (
    <div>
      <h2 className="text-5xl font-bold text-emerald-800 mb-4 text-right" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
        کتب خانہ
      </h2>
      <p className="text-xl text-gray-600 mb-12 text-right" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
        اشعار، کلام اور روحانی اقوال
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-amber-50 to-emerald-50 p-10 rounded-3xl shadow-xl">
          <div className="flex items-center justify-end space-x-3 rtl:space-x-reverse mb-6">
            <h3 className="text-3xl font-bold text-emerald-800" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
              منتخب اشعار
            </h3>
            <Feather className="text-amber-600" size={32} />
          </div>
          <div className="space-y-6 text-right">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <p className="text-xl text-gray-800 leading-loose mb-3" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے
              </p>
              <p className="text-xl text-gray-800 leading-loose" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                خدا بندے سے خود پوچھے بتا تیری رضا کیا ہے
              </p>
              <p className="text-sm text-gray-500 mt-4">— علامہ اقبال</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <p className="text-xl text-gray-800 leading-loose mb-3" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                نہ مسجد میں نہ کعبے میں نہ کونین میں ہے وہ
              </p>
              <p className="text-xl text-gray-800 leading-loose" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                جو دل میں نہیں وہ کہیں بھی نہیں
              </p>
              <p className="text-sm text-gray-500 mt-4">— بلھے شاہ</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <p className="text-xl text-gray-800 leading-loose" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                بول کہ لب آزاد ہیں تیرے
              </p>
              <p className="text-sm text-gray-500 mt-4">— فیض احمد فیض</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-emerald-50 to-amber-50 p-10 rounded-3xl shadow-xl">
          <div className="flex items-center justify-end space-x-3 rtl:space-x-reverse mb-6">
            <h3 className="text-3xl font-bold text-emerald-800" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
              روحانی اقوال
            </h3>
            <Heart className="text-red-500" size={32} />
          </div>
          <div className="space-y-6 text-right">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <p className="text-xl text-gray-800 leading-loose" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                دل کی آنکھیں کھولو اور حقیقت کو دیکھو
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <p className="text-xl text-gray-800 leading-loose" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                محبت میں ڈوب جاؤ تو سب کچھ مل جائے گا
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <p className="text-xl text-gray-800 leading-loose" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                جو دل کی دنیا میں کھو گیا وہ جہان بھر میں پا گیا
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <p className="text-xl text-gray-800 leading-loose" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                عشق کی راہ میں ہر قدم ایک سفر ہے
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-5xl font-bold text-emerald-800 mb-4 text-right" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
        تعارف
      </h2>
      <p className="text-xl text-gray-600 mb-12 text-right" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
        وجدان کے بارے میں
      </p>

      <div className="bg-white rounded-3xl shadow-xl p-10 mb-8">
        <div className="text-right space-y-6">
          <div className="flex justify-end mb-8">
            <div className="bg-gradient-to-br from-emerald-600 to-amber-600 p-6 rounded-full">
              <Feather className="text-white" size={48} />
            </div>
          </div>

          <p className="text-2xl text-gray-800 leading-loose" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
            <strong>وجدان</strong> ایک ادبی اور روحانی پلیٹ فارم ہے جو پاکستان کی تمام علاقائی زبانوں میں صوفی شعرا اور ادیبوں کی تعلیمات کو عام کرنے کے لیے وقف ہے۔
          </p>

          <p className="text-xl text-gray-700 leading-loose" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
            یہ ویب سائٹ اردو، پنجابی، سندھی، پشتو اور بلوچی زبانوں کے عظیم شعرا کی شاعری، سوانح حیات اور تصانیف کو ایک جگہ جمع کرتی ہے۔ ہمارا مقصد نئی نسل کو اپنے ادبی ورثے سے روشناس کرانا اور محبت، امن اور روحانیت کا پیغام پھیلانا ہے۔
          </p>

          <div className="bg-emerald-50 p-8 rounded-2xl mt-8">
            <h3 className="text-2xl font-bold text-emerald-800 mb-4" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
              ہمارا مشن
            </h3>
            <ul className="space-y-3 text-lg text-gray-700" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
              <li className="flex items-start justify-end space-x-3 rtl:space-x-reverse">
                <span>پاکستانی زبانوں میں صوفی ادب کو محفوظ کرنا</span>
                <Heart className="text-red-500 mt-1 flex-shrink-0" size={20} />
              </li>
              <li className="flex items-start justify-end space-x-3 rtl:space-x-reverse">
                <span>نئی نسل کو اپنے شعرا سے متعارف کرانا</span>
                <Heart className="text-red-500 mt-1 flex-shrink-0" size={20} />
              </li>
              <li className="flex items-start justify-end space-x-3 rtl:space-x-reverse">
                <span>ادبی بلاگز کے ذریعے معلومات فراہم کرنا</span>
                <Heart className="text-red-500 mt-1 flex-shrink-0" size={20} />
              </li>
              <li className="flex items-start justify-end space-x-3 rtl:space-x-reverse">
                <span>روحانی اور ادبی روایت کو زندہ رکھنا</span>
                <Heart className="text-red-500 mt-1 flex-shrink-0" size={20} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-5xl font-bold text-emerald-800 mb-4 text-right" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
        رابطہ کریں
      </h2>
      <p className="text-xl text-gray-600 mb-12 text-right" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
        ہم سے بات کریں
      </p>

      <div className="bg-white rounded-3xl shadow-xl p-10">
        <div className="text-right mb-10">
          <p className="text-xl text-gray-700 leading-loose mb-6" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
            ہم آپ کی رائے اور تجاویز کا خیرمقدم کرتے ہیں۔ اگر آپ کے پاس کوئی سوال، تبصرہ یا تجویز ہے تو براہ کرم ہم سے رابطہ کریں۔
          </p>
          <p className="text-lg text-gray-600" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
            آپ کا پیغام ہمارے لیے قیمتی ہے۔
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-right text-lg font-semibold text-gray-700 mb-2" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
              آپ کا نام
            </label>
            <input
              type="text"
              placeholder="نام درج کریں"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-6 py-4 rounded-xl border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none text-right text-lg"
              style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
            />
          </div>

          <div>
            <label className="block text-right text-lg font-semibold text-gray-700 mb-2" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
              ای میل ایڈریس
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-6 py-4 rounded-xl border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none text-right text-lg"
            />
          </div>

          <div>
            <label className="block text-right text-lg font-semibold text-gray-700 mb-2" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
              آپ کا پیغام
            </label>
            <textarea
              rows="6"
              placeholder="اپنا پیغام یہاں لکھیں..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-6 py-4 rounded-xl border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none text-right text-lg"
              style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
            ></textarea>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-4 rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition text-xl font-bold shadow-lg hover:shadow-xl"
            style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
          >
            پیغام بھیجیں
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50" dir="rtl">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap');
        * {
          font-family: 'Noto Nastaliq Urdu', serif;
        }
      `}</style>

      <NavBar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'blogs' && <BlogsPage />}
        {currentPage === 'poets' && <PoetsPage />}
        {currentPage === 'library' && <LibraryPage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      <footer className="bg-gradient-to-r from-emerald-800 to-emerald-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white bg-opacity-20 p-4 rounded-full">
              <Feather size={40} />
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
            وجدان
          </h3>
          <p className="text-lg mb-6 text-emerald-100" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
            پاکستانی زبانوں کے صوفی شعرا اور ادبی بلاگز کا مرکز
          </p>
          <div className="flex justify-center space-x-8 rtl:space-x-reverse mb-8">
            <button onClick={() => setCurrentPage('home')} className="hover:text-amber-300 transition" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>صفحہ اول</button>
            <button onClick={() => setCurrentPage('blogs')} className="hover:text-amber-300 transition" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>بلاگز</button>
            <button onClick={() => setCurrentPage('poets')} className="hover:text-amber-300 transition" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>شعرا</button>
            <button onClick={() => setCurrentPage('about')} className="hover:text-amber-300 transition" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>تعارف</button>
            <button onClick={() => setCurrentPage('contact')} className="hover:text-amber-300 transition" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>رابطہ</button>
          </div>
          <p className="text-emerald-200" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
            © ۲۰۲۵ وجدان - تمام حقوق محفوظ ہیں
          </p>
          <p className="text-sm text-emerald-300 mt-2" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
            محبت اور عرفان کی روشنی میں
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;