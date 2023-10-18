export interface star {
  id: string;
  title: string;
  description: string;
  size: number;
  color: 'white' | 'red' | 'blue' | 'yellow' | 'orange' | 'green' | 'purple';
}

export interface link {
  from: string;
  to: string;
}

export const stars: star[] = [
  {
    id: '42-fdf',
    title: 'fdf',
    description: 'description',
    size: 20,
    color: 'blue',
  },
  {
    id: '42-minishell',
    title: 'minishell',
    description: 'description',
    size: 30,
    color: 'white',
  },
  {
    id: '42-miniRT',
    title: 'miniRT',
    description: 'description',
    size: 30,
    color: 'blue',
  },
  {
    id: '42-Inception',
    title: 'Inception',
    description: `가상머신 위에 docker를 설치하고 Nginx, WordPress, MariaDB 컨테이너를 올렸습니다.
    각 컨테이너는 Alpine Linux 이미지에서 직접 패키지를 설치하는 Dockerfile을 만들어 설정해두었습니다.
    docker-compose를 통해 모든 컨테이너를 빌드, 실행시키고 네트워크와 볼륨도 설정했습니다.`,
    size: 26,
    color: 'orange',
  },
  {
    id: '42-Webserv',
    title: 'Webserv',
    description: 'description',
    size: 30,
    color: 'red',
  },
  {
    id: '42-칙칙퐁퐁',
    title: '칙칙퐁퐁',
    description: 'description',
    size: 50,
    color: 'red',
  },
];

export const links: link[] = [
  { from: '42-fdf', to: '42-miniRT' },
  { from: '42-Inception', to: '42-칙칙퐁퐁' },
  { from: '42-Webserv', to: '42-칙칙퐁퐁' },
];
