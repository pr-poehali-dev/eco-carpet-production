import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center space-x-2">
          <Icon name="Car" className="text-primary" size={32} />
          <span className="text-2xl font-bold text-primary">3D CovrPro</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
          <a href="#products" className="text-foreground hover:text-primary transition-colors">Продукция</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">О компании</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          Заказать звонок
        </Button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                3D коврики из
                <span className="text-primary block">экокожи</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Производим премиальные автомобильные коврики с точной посадкой по лекалам вашего авто
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="hover-scale">
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="/img/5bfdb05c-7e3f-40d5-825d-d10a99880f45.jpg" 
                alt="3D коврик из экокожи" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold">
                Эко-материалы
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Преимущества наших ковриков</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Используем современные технологии для создания идеальной посадки и максимального комфорта
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Settings",
                title: "Точная посадка",
                description: "Изготовление по индивидуальным лекалам вашего автомобиля"
              },
              {
                icon: "Leaf",
                title: "Экокожа премиум",
                description: "Высококачественная экокожа с водоотталкивающими свойствами"
              },
              {
                icon: "Shield",
                title: "Защита салона",
                description: "Надежная защита от грязи, влаги и механических повреждений"
              },
              {
                icon: "Wrench",
                title: "Легкий уход",
                description: "Простая чистка и долговечность материала"
              }
            ].map((feature, index) => (
              <Card key={index} className="hover-scale cursor-pointer">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={feature.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наша продукция</h2>
            <p className="text-xl text-muted-foreground">
              Широкий ассортимент 3D ковриков для различных марок автомобилей
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Стандартная серия",
                price: "от 9 000 ₽",
                image: "https://cdn.poehali.dev/files/1c4fe268-ebf5-465a-88c3-a3aae56b1a6c.jpg",
                features: ["Базовая экокожа", "Стандартные цвета", "Точная посадка"]
              },
              {
                title: "Премиум серия",
                price: "от 10 000 ₽",
                image: "/img/5bfdb05c-7e3f-40d5-825d-d10a99880f45.jpg",
                features: ["Премиум экокожа", "Широкая цветовая гамма", "Дополнительная прошивка"]
              },
              {
                title: "VIP серия",
                price: "от 11 500 ₽"
                image: "/img/9b1364ef-7ed4-42b9-a41a-887ba83265c5.jpg",
                features: ["Элитная экокожа", "Индивидуальный дизайн", "Логотип автомобиля"]
              }
            ].map((product, index) => (
              <Card key={index} className="overflow-hidden hover-scale cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{product.title}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-primary">
                    {product.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Icon name="Check" className="text-accent" size={16} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">О нашей компании</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Мы специализируемся на производстве премиальных автомобильных ковриков из экокожи с использованием 3D-технологий.
                </p>
                <p>
                  Наша команда имеет более 10 лет опыта в автомобильной индустрии и постоянно совершенствует технологии производства.
                </p>
                <p>
                  Используем только качественные материалы и современное оборудование для создания продукции премиум-класса.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">моделей авто</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-8">
                <div className="w-full h-full bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Factory" className="text-primary" size={120} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Готовы ответить на ваши вопросы и принять заказ
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Phone",
                title: "Телефон",
                content: "+7 (495) 123-45-67",
                link: "tel:+74951234567"
              },
              {
                icon: "Mail",
                title: "Email",
                content: "info@3dcovrpro.ru",
                link: "mailto:info@3dcovrpro.ru"
              },
              {
                icon: "MapPin",
                title: "Адрес",
                content: "г. Москва, ул. Производственная, 15",
                link: "#"
              },
              {
                icon: "Clock",
                title: "Время работы",
                content: "Пн-Пт: 9:00-18:00",
                link: "#"
              }
            ].map((contact, index) => (
              <Card key={index} className="text-center hover-scale cursor-pointer">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={contact.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle>{contact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href={contact.link} className="text-muted-foreground hover:text-primary transition-colors">
                    {contact.content}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/10 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Car" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">3D CovrPro</span>
            </div>
            <div className="text-muted-foreground">
              © 2024 3D CovrPro. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}