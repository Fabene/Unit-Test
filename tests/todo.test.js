import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Todo from '../component/todo';

//tester l'affichage correct de la composante Todo 
describe('Todo component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Todo />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  //pour s'assurer que la valeur de todo est mise à jour correctement 
  it('updates todo when input is changed', () => {
    //simule une fonction
    const mock = jest.fn
      render(<Todo />);
      const input = screen.getByTestId('input')
      fireEvent.change(input, {target: {value: {mock}}})
      expect(mock.call.length).toBe(1)

  });

  // vérifie si le composant Todo ajoute correctement un todo à la liste doing lorsque la méthode handleSubmit est appelée
  it('adds todo to doing when handleSubmit is called', () => {
    const mock = jest.fn
      render( <Todo/>)
      const update = screen.getByTestId('input')
      fireEvent.keyPress(update,{ key: {mock}} )
      expect (mock.call.length).toBe(1)    
  });

  //
  it('it"s checked', () => {
    const mock = jest.fn  
      render( <Todo/>)
        const checked = screen.getByTestId('checks')
        fireEvent.click(checked)
        expect (mock.call.length).toBe(0)
  })

});
