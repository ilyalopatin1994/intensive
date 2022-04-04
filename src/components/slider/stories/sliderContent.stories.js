import sliderContent from "/src/components/slider/sliderContent";

export default {
  title: "sliderContent",
  components: { sliderContent },
};

export const SliderContentTemplate = () => ({
  components: { sliderContent },
  template: `
    <div style="width: 400px">
    <slider-content>
    <template #picture>
      <div class="pictureContainer">
        <img src="static/media/public/github.jpg" alt="" />
      </div>
    </template>
    <template #textContent>
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto consequuntur dolore dolores eius, est
      illum ipsum maiores minima molestiae natus nemo non officia quibusdam sint? A accusantium aspernatur assumenda
      consectetur deleniti dolores ea expedita explicabo illum laborum officia, porro quae quod quos repellendus totam
      unde. Consequuntur, neque, tempora. Ad. "
    </template>
    </slider-content>
    </div>`,
});

SliderContentTemplate.story = {
  name: "Контент слайдера",
};
