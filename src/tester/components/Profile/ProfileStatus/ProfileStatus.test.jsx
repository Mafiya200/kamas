import { create } from "react-test-renderer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { updateProfileStatus } from "../../../../redux/profile-reducer";



describe("ProfileStatusHooks component", () => {
    /* test("status from post", () => {
      const component = create(<ProfileStatusWithHooks status={'its good'} updateProfileStatus={updateProfileStatus} isAuth={true} />);///создаётся виртуально create
      const instance = component.getInstance();///дай мне экземпляр
      expect(instance).toBe({});
      
    }); */
    test("status from post", () => {
        const component = create(<ProfileStatusWithHooks status={'its good'} updateProfileStatus={updateProfileStatus} isAuth={true} />);///создаётся виртуально creat e

        const root = component.root;/// для функциональной компоненты
        let spans = root.findByType("span");
        expect(spans.children.length).toBe(1);

    });
    test("statusC", () => {
        const component = create(<ProfileStatusWithHooks status={'its good'} updateProfileStatus={updateProfileStatus} isAuth={true} />);///создаётся виртуально create

        const root = component.root;/// для функциональной компоненты
        let spans = root.findByType("span");
        expect(spans.children[0]).toBe('its good');

    });
    test("not input", () => {
        const component = create(<ProfileStatusWithHooks status={'its good'} updateProfileStatus={updateProfileStatus} isAuth={true} />);///создаётся виртуально create

        const root = component.root;/// для функциональной компоненты

        expect(() => {
            let inputs = root.findByType("input");
        }).toThrow();///интересный случай проверка падает ли ошибка

    });
    /*  test('test onClick', () => {
         let component = create(<ProfileStatusWithHooks status={'text'} updateProfileStatus={updateProfileStatus} />);
         let root = component.root;
         let span = root.findByType('span');
         span.props.onDoubleClick();
         let input = root.findByType('input');
        expect(input.props.value).toBe('text');
 
 
     });     
     
     Важно! В примере указан способ для теста функции в классовой компоненте.
     Однако в функциональной, такой способ не сработает. На текущий момент (август 2023),
     не нашел способа тестирования фуинкий в функциональных комнонентах.
     Если найдете решение, прошу отписать  в ответ
     */

   /*  test("callback ", () => { */
        /* let mockCallback = jest.fn(); *////(фейковая функция) следит за вызванными колбеками
        /* const component = create(<ProfileStatusWithHooks status={'its good'}  updateProfileStatus={mockCallback} isAuth={true} />); *////создаётся виртуально create
        /* const root = component.root; *//// для функциональной компоненты
/*        let propsSpan = root.findByType('span').props;
 */        /* propsSpan.onBlur[](); */ 
       
       /*  expect(mockCallback.mock.calls.length).toBe(1); */
/*        expect(propsSpan.onBlur).toBe();
 */



    /* }); */




});
