// const React = require('react');
//
// function words(line) {
//   line = line.trim()
//   return line.split(' ').length
// }
//
// function lines(poem) {
//   poem = poem.trim()
//    return poem.split('\n')
// }
//
// function finito(poem) {
//   const work = lines(poem)
//   if (work.length === 3 && words(work[0]) === 5 && words(work[1]) === 7 && words(work[2]) === 5) {
//     return true
//   } else {
//     return false
//   }
// }
//
//
// class PoemWriter extends React.Component {
//   constructor() {
//     super();
//
//     this.change = this.change.bind(this);
//
//     this.state = {
//       message: '',
//       valid: false
//     };
//   }
//
//   change(event) {
//     this.setState({
//       message: event.target.value,
//       valid: finito(event.target.value)
//     })
//   }
//
//   render() {
//     return (
//       <div>
//         <textarea rows="3" cols="60" value={this.state.message} onChange={this.change}/>
//
//         {!this.state.valid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
//
//       </div>
//     );
//   }
// }
//
// module.exports = PoemWriter;


const React = require('react');

function countWords(line) {
  return line.split(' ').filter(l => l).length;
}

function isValidPoem(poem) {
  const poemLines = poem.split('\n').filter(l => l);
  const isRightAmountOfLines = poemLines.length === 3;
  const hasRightAmountOfWords = countWords(poemLines[0]) === 5 && countWords(poemLines[1]) === 3 && countWords(poemLines[2]) === 5;
  return isRightAmountOfLines && hasRightAmountOfWords;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      isValid: false,
    };

    this.setPoemContent = this.setPoemContent.bind(this);
  }

  setPoemContent(ev) {
    const content = ev.target.value;

    if (content) {
      this.setState({
        content: content,
        isValid: isValidPoem(content),
      });
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.setPoemContent} />
        {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}

module.exports = PoemWriter;
