import React, { Component } from 'react';
import bespoke_img from '../img/bespoke.jpg';

class Bespoke extends Component{

    render(){
        return (
            <div>
                <div class="mt-5 w-100 text-white" style={{backgroundColor: '#252525'}}>
                    <div class="row no-gutters">
                        <div class="col-12 col-sm-6">
                            <img src={bespoke_img} href="" style={{maxWidth: '100%'}}/>
                        </div>
                        <div class="col-12 col-sm-6 p-5">
                            <div class="h3 text-center">Bespoke Tours</div>
                            <p class="text-center">Lorem ipsum dolor sit amet, curabitur nec lacus pellentesque ut facilisis.</p>
                            <form>
                                <div class="form-row mb-3">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Name"/>
                                    </div>
                                    <div class="col">
                                        <input type="email" class="form-control" placeholder="Email"/>
                                    </div>
                                </div>
                                <div class="form-row mb-3">
                                    <div class="col">
                                        <input type="tel" class="form-control" placeholder="Telephone"/>
                                    </div>
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Country"/>
                                    </div>
                                </div>
                                <div class="form-row mb-3">
                                    <div class="col">
                                        <textarea id="messageTxt" class="form-control" rows="3" placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <div class="form-row mb-3">
                                    <div class="col">
                                        <button type="submit" class="btn btn-warning">Inquire Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bespoke;