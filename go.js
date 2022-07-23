
const urls = [
  'https://www.dh-2.top',
  'https://www.dh-1.top',
];

const newUrls = [
  '500dh.icu',
  '500dh.lol',
  '500dh.run',
];


const delaySeconds = 2;

class App extends React.Component {
  urlSuffix = '';
  state = {
    delaySeconds: delaySeconds,
    url: urls[Math.floor(Math.random() * urls.length)],
  };

  constructor() {
    super();
    const hash =window.location.hash.replace(/^#/, '' );
    this.urlSuffix = hash + window.location.search;
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.delayRedirect();
    }, 0);
  };

  delayRedirect = () => {
    if (this.state.delaySeconds > 0) {
      setTimeout(() => {
        this.setState({
          delaySeconds: this.state.delaySeconds - 1,
        }, () => {
          this.delayRedirect();
        });
      }, 1000);
    } else {
      this.redirect();
    }
  };

  redirect = () => {
    window.location.href = this.paramedUrl(this.state.url);
  };

  paramedUrl = (url) => {
    return url + this.urlSuffix;
  };

  render () {
    return (
      <div style={{
        textAlign: 'center'
      }}>
        <div style={{
          fontWeight: 'bold',
          fontSize: '24px',
          marginTop: '5px',
          marginBottom: '20px',
        }}>500福利导航</div>
        <div style={{
          marginBottom: '40px'
        }}>正在加载最新地址，请稍等（{this.state.delaySeconds}）....</div>

        <div style={{
          marginBottom: '10px',
        }}>牢记下方-最新地址发布页</div>
        <div style={{
          marginBottom: '20px',
        }}>
          {newUrls.map((url) => {
            return <div>{url}</div>
          })}
        </div>
        <div><font color="#0027ff">500dizhi@gmail.com</font><br />发送任意邮件内容至上述邮箱即可获取最新地址。</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
