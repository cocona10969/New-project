import { useEffect, useState } from 'react'
import BorderGlow from './components/BorderGlow'
import MagicRings from './components/MagicRings'
import ColorBends from './components/ColorBends'
import SoftAurora from './components/SoftAurora'

const Arrow = ({ diagonal = false }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d={diagonal ? 'M7 17 17 7M8 7h9v9' : 'M5 12h14m-5-5 5 5-5 5'} />
  </svg>
)

const ToolbarIcon = ({ type }) => {
  const paths = {
    home: 'M4 11.5 12 4l8 7.5M6.5 10v9h4.2v-5h2.6v5h4.2v-9',
    move: 'M12 3v18M3 12h18M12 3 9 6m3-3 3 3M21 12l-3-3m3 3-3 3M12 21l-3-3m3 3 3-3M3 12l3-3m-3 3 3 3',
    bounds: 'M5 5h4M5 5v4m14-4h-4m4 0v4M5 19h4m-4 0v-4m14 4h-4m4 0v-4',
    alignLeft: 'M6 5v14m3-11h9m-9 4h6m-6 4h10',
    alignCenter: 'M12 4v16M6 8h12m-9 4h6m-8 4h10',
    alignRight: 'M18 5v14M6 8h9m-6 4h6m-10 4h10',
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={paths[type] || paths.bounds} /></svg>
}

const PhotoshopBar = () => (
  <div className="hero-psbar" aria-hidden="true">
    <span className="ps-icon"><ToolbarIcon type="home" /></span>
    <span className="ps-icon move"><ToolbarIcon type="move" /></span>
    <span className="ps-chevron">⌄</span>
    <span className="ps-check">✓</span>
    <span className="ps-label">Auto-Select:</span>
    <span className="ps-select">Layer <b>⌄</b></span>
    <span className="ps-check">✓</span>
    <span className="ps-label transform-label">Show Transform Controls</span>
    <i className="ps-divider" />
    <span className="ps-icon"><ToolbarIcon type="alignLeft" /></span>
    <span className="ps-icon"><ToolbarIcon type="alignCenter" /></span>
    <span className="ps-icon"><ToolbarIcon type="alignRight" /></span>
    <span className="ps-icon"><ToolbarIcon type="bounds" /></span>
    <span className="ps-icon"><ToolbarIcon type="alignCenter" /></span>
    <span className="ps-icon"><ToolbarIcon type="alignLeft" /></span>
    <i className="ps-divider" />
    <span className="ps-more">•••</span>
    <span className="ps-muted">3D Mode:</span>
    <span className="ps-3d">○ ⟲ ✦ ✓</span>
  </div>
)

const projects = [
  {
    id: '01',
    title: 'ENDURANCE / 疾速边界',
    type: '赛事品牌视觉 · AI ART DIRECTION',
    caption: '为马拉松与越野赛事构建高能量视觉叙事，从主视觉延展至线上传播与文创物料。',
    tone: 'ember',
    tag: 'BRAND VISUAL',
    glow: '18 92 66',
    colors: ['#ff7a45', '#f43f8b', '#ff5da8'],
  },
  {
    id: '02',
    title: 'NEON SPECIMEN',
    type: 'AIGC 产品影像 · CAMPAIGN',
    caption: '以生成式工作流重构产品场景、材质与光影，探索传统电商设计之外的视觉可能。',
    tone: 'violet',
    tag: 'AIGC CAMPAIGN',
    glow: '270 88 78',
    colors: ['#a78bfa', '#e879f9', '#67e8f9'],
  },
  {
    id: '03',
    title: 'SOCIAL GRAVITY',
    type: '小红书内容系统 · SOCIAL MEDIA',
    caption: '围绕品牌调性搭建可复用的图文模板与内容语言，让高频创意生产保持一致与鲜活。',
    tone: 'blue',
    tag: 'XIAOHONGSHU',
    glow: '198 92 70',
    colors: ['#38bdf8', '#818cf8', '#c084fc'],
  },
  {
    id: '04',
    title: 'MOTION PROTOCOL',
    type: '短视频分镜 · AI MOTION',
    caption: '从镜头语言、节奏到生成参数，设计 15–30 秒商业短片的完整视觉路径。',
    tone: 'silver',
    tag: 'MOTION DESIGN',
    glow: '258 62 82',
    colors: ['#e2e8f0', '#a78bfa', '#67e8f9'],
  },
]

const capabilityModules = [
  '视觉叙事', 'AI 创意工作流', '品牌视觉', '商业设计', '内容运营',
  '生成式影像', '版式设计', '社交媒体', '动态视觉', '创意策划',
]

const timeline = [
  { date: '2025.10 — NOW', company: '中山蓓盾运动科技有限公司', role: '平面设计师', detail: '品牌视觉全案 / 赛事合作 / AIGC 产品影像 / 小红书创意' },
  { date: '2021.07 — 2025.09', company: '裕和科技有限公司', role: '视觉设计师', detail: '电商视觉 / 商业短视频分镜 / 营销活动 / 小红书 0→1' },
  { date: '2019.07 — 2021.05', company: '创者皮具有限公司', role: '跨境电商美工', detail: '跨境电商视觉定位 / 首页与详情页 / 平面广告' },
]

function ProjectVisual({ project }) {
  return (
    <div className={`project-visual ${project.tone}`}>
      <div className="visual-no">{project.id}</div>
      <div className="visual-grid" />
      <div className="orb orb-main" />
      <div className="orb orb-small" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <span className="visual-tag">{project.tag}</span>
      <span className="visual-coordinate">23°07′ N / 113°15′ E</span>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [navScrolled, setNavScrolled] = useState(false)

  useEffect(() => {
    const updateNav = () => setNavScrolled(window.scrollY >= window.innerHeight - 80)
    updateNav()
    window.addEventListener('scroll', updateNav, { passive: true })
    window.addEventListener('resize', updateNav)
    return () => {
      window.removeEventListener('scroll', updateNav)
      window.removeEventListener('resize', updateNav)
    }
  }, [])

  useEffect(() => {
    const hero = document.querySelector('#home')
    const about = document.querySelector('#about')
    if (!hero && !about) return undefined

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      hero?.classList.add('hero-visible')
      about?.classList.add('about-visible')
      return undefined
    }

    hero?.classList.add('hero-motion-ready')
    about?.classList.add('about-motion-ready')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const visibleClass = entry.target.id === 'home' ? 'hero-visible' : 'about-visible'
        entry.target.classList.toggle(visibleClass, entry.isIntersecting)

        if (entry.target.id === 'home') {
          document.documentElement.classList.toggle('hero-visible', entry.isIntersecting)
        }
      })
    }, {
      threshold: 0.22,
      rootMargin: '0px 0px -12% 0px',
    })

    if (hero) observer.observe(hero)
    if (about) observer.observe(about)
    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('hero-visible')
    }
  }, [])

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const handlePortraitTilt = (event) => {
    const card = event.currentTarget
    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const offsetX = (x / rect.width - 0.5) * 2
    const offsetY = (y / rect.height - 0.5) * 2

    card.style.setProperty('--tilt-rx', `${(-offsetY * 8).toFixed(2)}deg`)
    card.style.setProperty('--tilt-ry', `${(offsetX * 10).toFixed(2)}deg`)
    card.style.setProperty('--tilt-scale', '1.035')
    card.style.setProperty('--glow-x', `${x}px`)
    card.style.setProperty('--glow-y', `${y}px`)
  }

  const resetPortraitTilt = (event) => {
    const card = event.currentTarget
    card.style.setProperty('--tilt-rx', '0deg')
    card.style.setProperty('--tilt-ry', '0deg')
    card.style.setProperty('--tilt-scale', '1')
    card.style.setProperty('--glow-x', '50%')
    card.style.setProperty('--glow-y', '28%')
  }

  return (
    <main>
      <div className="site-color-bends" aria-hidden="true">
        <ColorBends
          colors={['#120918', '#25102f', '#472254', '#7e2c58']}
          rotation={92}
          autoRotate={0.28}
          speed={0.07}
          scale={1.08}
          frequency={1.08}
          warpStrength={0.54}
          mouseInfluence={0.16}
          parallax={0.12}
          noise={0}
          iterations={2}
          intensity={0.72}
          bandWidth={4.7}
          transparent
        />
      </div>

      <header className={`nav shell${navScrolled ? ' scrolled' : ''}`}>
        <button className="logo" onClick={() => scrollTo('#home')} aria-label="返回首页">
          <span className="logo-mark">ZY</span>
          <span className="logo-copy">HUANG ZIYING<br />PORTFOLIO · 2026</span>
        </button>
        <nav className={menuOpen ? 'open' : ''} aria-label="主导航">
          <button onClick={() => scrollTo('#about')}>关于我</button>
          <button onClick={() => scrollTo('#works')}>视觉展示</button>
          <button onClick={() => scrollTo('#strengths')}>个人优势</button>
        </nav>
        <button className="contact-pill" onClick={() => scrollTo('#contact')}>
          LET'S TALK <Arrow diagonal />
        </button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="展开菜单">
          <span /><span />
        </button>
      </header>

      <section className="hero" id="home">
        <div className="hero-soft-aurora" aria-hidden="true">
          <SoftAurora
            speed={0.28}
            scale={2.05}
            brightness={0.78}
            color1="#ff5da8"
            color2="#5f7dff"
            noiseFrequency={2.85}
            noiseAmplitude={0.58}
            bandHeight={0.5}
            bandSpread={0.72}
            octaveDecay={0.18}
            layerOffset={0.36}
            colorSpeed={0.42}
            enableMouseInteraction
            mouseInfluence={0.08}
          />
        </div>
        <PhotoshopBar />
        <div className="hero-transition" aria-hidden="true" />

        <div className="hero-content shell">
          <div className="hero-title-block">
            <div className="hero-laying-character" aria-hidden="true">
              <img src="/hero-qgirl-laying-cutout.png" alt="" />
            </div>
            <button className="hero-smile-icon" type="button" onClick={() => scrollTo('#works')} aria-label="跳转到视觉展示">
              <img src="/smile-icon.gif" alt="" aria-hidden="true" />
            </button>
            <h1 className="portfolio-title portfolio-reference portfolio-cover-title" aria-label="PORTFOLIO">
              <img src="/portfolio-cover-title-pink.png" alt="" aria-hidden="true" />
            </h1>
            <div className="hero-sticker">VISUAL · AI · CONTENT DESIGN</div>
          </div>
          <div className="hero-bottom">
            <p>在视觉秩序与生成式想象之间，<br />创造有情绪，也有效率的内容。</p>
            <button className="round-arrow" onClick={() => scrollTo('#about')} aria-label="向下浏览"><Arrow /></button>
            <div className="status"><i /> AVAILABLE FOR OPPORTUNITIES<br />BASED IN GUANGDONG, CHINA</div>
          </div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="shell">
          <div className="section-kicker"><span>02</span><p>关于我</p></div>
          <div className="about-grid">
            <div className="portrait-wrap">
              <div className="portrait tilted-portrait" onPointerMove={handlePortraitTilt} onPointerLeave={resetPortraitTilt}>
                <div className="portrait-halo" />
                <img className="portrait-avatar" src="/about-avatar-peace.png" alt="黄子盈 3D 形象" />
                <div className="portrait-label">ZIYING HUANG<br />VISUAL & AI DESIGNER</div>
              </div>
              <span className="portrait-note">梦想是去任何想去的地方</span>
            </div>

            <div className="about-copy">
              <p className="eyebrow">HELLO, I'M ZIYING.</p>
              <h2>让想象力落地，<br />让设计拥有<span>新的引力。</span></h2>
              <p className="lead">我是一名拥有 7 年经验的视觉设计师，也是一名持续探索生成式 AI 的创作者。动画专业训练赋予我对造型、分镜和叙事的敏感，而商业项目经验让我更在意创意如何真正被看见、被理解、被使用。</p>
              <p className="secondary">从品牌主视觉、电商内容到 AIGC 图像与视频，我擅长在传统设计方法与 AI 工作流之间切换，为团队搭建可复用、可规模化的创意系统。</p>
              <div className="stats">
                <div><strong>07<sup>+</sup></strong><span>YEARS OF<br />DESIGN EXPERIENCE</span></div>
                <div><strong>03</strong><span>CORE<br />DISCIPLINES</span></div>
                <div><strong>0→1</strong><span>XIAOHONGSHU<br />OPERATIONS</span></div>
              </div>
              <div className="contact-lines">
                <a href="mailto:978580173@qq.com">978580173@qq.com <Arrow diagonal /></a>
                <a href="tel:19928000730">+86 199 2800 0730 <Arrow diagonal /></a>
              </div>
            </div>
          </div>

          <div className="timeline career-path">
            <div className="timeline-header">
              <span>CAREER PATH</span>
              <h3>工作经历</h3>
            </div>
            <div className="career-track">
            {timeline.map((item) => (
              <article key={item.date}>
                <i className="career-node" aria-hidden="true" />
                <time>{item.date}</time>
                <div>
                  <h4>{item.company}</h4>
                  <span>{item.role}</span>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
            </div>
          </div>
        </div>
      </section>

      <section className="works section" id="works">
        <div className="shell">
          <div className="section-kicker light"><span>03</span><p>视觉展示</p></div>
          <div className="works-heading">
            <h2>VISUAL<br /><em>DISPLAY</em></h2>
            <div className="works-falling-character" aria-hidden="true">
              <img src="/hero-qgirl-falling-alpha.png" alt="" />
            </div>
            <p>一些关于速度、质感、内容与未来的视觉实验。<br />真实项目图片将在下一阶段替换。</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <BorderGlow
                className={`project-card ${index % 3 === 0 ? 'wide' : ''}`}
                key={project.id}
                edgeSensitivity={34}
                glowColor={project.glow}
                backgroundColor="#101016"
                borderRadius={26}
                glowRadius={34}
                glowIntensity={1.15}
                coneSpread={24}
                fillOpacity={0.32}
                animated
                colors={project.colors}
              >
                <article className="project-card-content">
                  <ProjectVisual project={project} />
                  <div className="project-meta">
                    <div><span>{project.type}</span><h3>{project.title}</h3></div>
                    <p>{project.caption}</p>
                    <button aria-label={`查看 ${project.title}`}><Arrow diagonal /></button>
                  </div>
                </article>
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>

      <section className="strengths section" id="strengths">
        <div className="shell">
          <div className="section-kicker"><span>04</span><p>CAPABILITIES / APPROACH</p></div>
          <div className="capability-orbit">
            <div className="capability-center">
              <h2>不止于做一张<br /><em>好看的图。</em></h2>
            </div>
            {capabilityModules.map((label, index) => (
              <button
                className={`capability-tile tile-${index + 1}`}
                key={label}
                onClick={() => scrollTo('#works')}
                aria-label={`查看${label}相关项目`}
              >
                <img src="/hero-hands-v2.png" alt="" aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <footer className="contact" id="contact">
        <div className="contact-rings" aria-hidden="true">
          <MagicRings
            color="#ff5da8"
            colorTwo="#ff9acb"
            ringCount={5}
            speed={0.32}
            attenuation={12}
            lineThickness={1.05}
            baseRadius={0.23}
            radiusStep={0.085}
            scaleRate={0.055}
            opacity={0.38}
            blur={0.72}
            noiseAmount={0.01}
            rotation={18}
            ringGap={1.14}
            fadeIn={0.9}
            fadeOut={0.62}
            followMouse
            mouseInfluence={0.04}
            hoverScale={1.03}
            parallax={0.02}
            clickBurst={false}
          />
        </div>
        <div className="noise" aria-hidden="true" />
        <div className="shell contact-inner">
          <div className="section-kicker light"><span>05</span><p>CONTACT / COLLABORATION</p></div>
          <div className="contact-main">
            <p className="eyebrow">HAVE AN IDEA IN MIND?</p>
            <h2><span>LOVE</span><br /><em>AND</em><br /><span>LEARN.</span></h2>
            <a className="mail-link" href="mailto:978580173@qq.com">978580173@qq.com <Arrow diagonal /></a>
          </div>
          <div className="contact-footer">
            <p>视觉设计 / AIGC 内容 / 品牌合作 / 小红书运营</p>
            <p>© 2026 ZIYING HUANG. ALL RIGHTS RESERVED.</p>
            <button onClick={() => scrollTo('#home')}>BACK TO TOP →</button>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
