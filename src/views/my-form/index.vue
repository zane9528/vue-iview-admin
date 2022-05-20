<template>
  <div class="container my_form">
    <Form :model="formItem" :label-width="80">
      <FormItem label="Input">
        <Input v-model="formItem.input" placeholder="Enter something..." />
      </FormItem>
      <FormItem label="Select">
        <Select v-model="formItem.select">
          <Option value="beijing">
            New York
          </Option>
          <Option value="shanghai">
            London
          </Option>
          <Option value="shenzhen">
            Sydney
          </Option>
        </Select>
      </FormItem>
      <FormItem label="DatePicker">
        <Row>
          <Col span="11">
            <DatePicker v-model="formItem.date" type="date" placeholder="Select date" />
          </Col>
          <Col span="2" style="text-align: center">
            -
          </Col>
          <Col span="11">
            <TimePicker v-model="formItem.time" type="time" placeholder="Select time" />
          </Col>
        </Row>
      </FormItem>
      <FormItem label="Radio">
        <RadioGroup v-model="formItem.radio">
          <Radio label="male">
            Male
          </Radio>
          <Radio label="female">
            Female
          </Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="Checkbox">
        <CheckboxGroup v-model="formItem.checkbox">
          <Checkbox label="Eat" />
          <Checkbox label="Sleep" />
          <Checkbox label="Run" />
          <Checkbox label="Movie" />
        </CheckboxGroup>
      </FormItem>
      <FormItem label="Switch">
        <i-switch v-model="formItem.switch" size="large">
          <span slot="open">On</span>
          <span slot="close">Off</span>
        </i-switch>
      </FormItem>
      <FormItem label="Slider">
        <Slider v-model="formItem.slider" range />
      </FormItem>
      <FormItem label="Text">
        <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..." />
      </FormItem>
      <FormItem>
        <Button type="primary">
          Submit
        </Button>
        <Button style="margin-left: 8px">
          Cancel
        </Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  name: 'MyForm',
  data() {
    return {
      formItem: {
        input: '',
        select: '',
        radio: 'male',
        checkbox: [],
        switch: true,
        date: '',
        time: '',
        slider: [20, 50],
        textarea: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.my_form{
  padding: 50px;
  margin: 0 auto;
}
</style>
