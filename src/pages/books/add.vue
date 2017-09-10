<template>
    <section class="page">
        <nav-menu activeIndex="2-3"></nav-menu>
        <el-row>
            <el-col :span="8" :offset="8">
                <el-form ref="form" :model="form" label-width="100px">
                    <el-form-item label="书籍名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="简介">
                        <el-input v-model="form.description"></el-input>
                    </el-form-item>
                    <el-form-item label="作者">
                        <el-input v-model="form.author"></el-input>
                    </el-form-item>
                    <el-form-item label="译者">
                        <el-input v-model="form.translator"></el-input>
                    </el-form-item>
                    <el-form-item label="语言">
                       <el-select v-model="form.lang" multiple filterable remote placeholder="请输入语言"
                            :remote-method="getLang" :loading="loading">
                            <el-option
                                v-for="lang in langs"
                                :key="lang.value"
                                :label="lang.label"
                                :value="lang.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="框架">
                        <el-select v-model="form.framework" multiple filterable remote placeholder="请输入框架"
                            :remote-method="getFramework" :loading="loading">
                            <el-option
                                v-for="framework in frameworks"
                                :key="framework.value"
                                :label="framework.label"
                                :value="framework.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="出版社">
                        <el-select v-model="form.press"
                            multiple filterable remote placeholder="请输入出版社"
                            :remote-method="getPress" :loading="loading">
                            <el-option
                                v-for="press in presses"
                                :key="press.value"
                                :label="press.label"
                                :value="press.value">
                            </el-option>    
                        </el-select>
                    </el-form-item>
                    <el-form-item label="ISBN">
                        <el-input v-model="form.ISBN"></el-input>
                    </el-form-item>
                    <el-form-item label="出版日期">
                        <el-date-picker
                            v-model="form.publishDate"
                            type="date"
                            placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="是否可以传播">
                        <el-checkbox v-model="form.allowSpread"></el-checkbox>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </section>
</template>
<script>
    import navMenu from 'com/nav-menu';
    import stream from 'util/stream';

    export default {
        name: 'books-add',
        data (){
            return {
                presses: [],    //出版社
                frameworks: [], //框架
                loading: false,
                form:{
                    name: '',   //书籍名
                    author: '',     //作者
                    translator: '', //译者
                    lang: '',   //语言
                    framework: '',  //框架
                    ISBN: '',
                    press: '',  //出版社
                    publishDate: new Date(),    //出版时间
                    allowSpread: false, //允许传播
                }
            };
        },
        components: {
            navMenu
        },
        methods: {
            getLang (){
            },
            getPress (){
            },
            getFramework (){
            },
            onSubmit (){
                stream.form('/books/add', this.form).then( data => {
                    console.log( data );
                }).catch( e => {
                });
            }
        }
    }
</script>