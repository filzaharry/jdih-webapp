# Use base image (LTS) for production as builder                                             
FROM node:18.17.1 AS builder                                                                 
                                                                                             
# Set the working directory for builder                                                      
WORKDIR /vol/app                                                                             
                                                                                             
# Copy only *.json to leverage docker caching                                                
COPY package*.json ./                                                                        
                                                                                             
# Install dependencies                                                                       
RUN npm install                                                                              
                                                                                             
# Copy all file to workdir                                                                   
COPY . .                                                                                     
                                                                                             
# Build service                                                                              
RUN npm run build                                                                            
                                                                                             
# Use base image (bullseye-slim) for production                                              
FROM node:18.17.1-bullseye-slim AS production                                                
                                                                                             
# Set the working directory inside the container for production                              
WORKDIR /vol/app                                                                             
                                                                                             
# Copy only the production dependencies and the compiled application from the builder stage  
COPY --from=builder /vol/app/package*.json ./                                                
COPY --from=builder /vol/app/package*.js ./                                                
COPY --from=builder /vol/app/package*.ts ./                                                
COPY --from=builder /vol/app/package*.lock ./                                                
COPY --from=builder /vol/app/.next ./.next                                                   
COPY --from=builder /vol/app/public ./public                                                 
COPY --from=builder /vol/app/public ./.env.production                                        
                                                                                             
# Set NODE ENV to production                                                                 
ENV NODE_ENV production                                                                      
                                                                                             
# Install dependencies                                                                       
RUN npm install                                                                              
                                                                                             
# Expose Port Service                                                                        
EXPOSE 5004                                                                                  
                                                                                             
# Execute command running service                                                            
CMD [ "npm", "start" ]           
                                                                                             
                                                                                             
                                                                                             
                                                                                             

