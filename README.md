#### Lesson Challenge

Read these 4 articles: [Understanding the React Component Lifecycle](http://busypeoples.github.io/post/react-component-lifecycle/), [React component’s lifecycle](https://medium.com/react-ecosystem/react-components-lifecycle-ce09239010df), [Understanding React — Component life-cycle](https://medium.com/@baphemot/understanding-reactjs-component-life-cycle-823a640b3e8d), and [React JS: what is a PureComponent?](http://lucybain.com/blog/2018/react-js-pure-component/) and answer the following questions in the #explain-it channel:

1.  Describe what the in the workspace below will render on the screen and explain why.
+  I think PureComponent is performing a shallow equality check of setInterval within App component, which might explain why pure component is not re-rendering.

2.  Describe a React anti-pattern that's used in the code.
+ Updating props within state.

```javascript

this.state = {
      update: props.toggle,
    };

```

3.  How do we need to modify the `Normal3` Component in order to keep it from re-rendering if the `App` Component's state remains the same?
+ Change Normal3 to a PureComponent

This exercise is based on this sandbox: https://codesandbox.io/s/3vpp84yp5.
